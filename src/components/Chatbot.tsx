"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Globe2 } from "lucide-react";
import { chatKnowledgeBase, ChatEntry } from "@/content/chatbotData";

type Lang = "fr" | "en" | "ar" | "darija";

type Message = {
  role: "user" | "bot";
  text: string;
};

const LANG_LABELS: Record<Lang, string> = {
  fr: "FR",
  en: "EN",
  ar: "AR",
  darija: "DAR",
};

const GREETINGS: Record<Lang, string> = {
  fr: "Bonjour ! Posez-moi une question sur Mohamed Chrourou : son parti, sa circonscription, ses projets, ses questions parlementaires...",
  en: "Hello! Ask me anything about Mohamed Chrourou: his party, constituency, projects, parliamentary questions...",
  ar: "مرحبا! اسألني عن محمد أشرورو: حزبه، دائرته، مشاريعه، أسئلته البرلمانية...",
  darija: "أهلا! سولني على محمد أشرورو: الحزب ديالو، الدائرة، المشاريع، الأسئلة البرلمانية...",
};

// Reply used when the user just greets/small-talks with no real question yet
const GREETING_REPLY: Record<Lang, string> = {
  fr: "Bonjour ! Je vais bien, merci. Posez-moi une question sur Mohamed Chrourou (parti, circonscription, projets, mandat...).",
  en: "Hi there! I'm good, thanks. Ask me anything about Mohamed Chrourou (party, constituency, projects, mandate...).",
  ar: "أهلا! لاباس، شكرا. اسألني على محمد أشرورو (الحزب، الدائرة، المشاريع، الولاية...).",
  darija: "أهلا بيك! لاباس الحمد لله. سولني على محمد أشرورو (الحزب، الدائرة، المشاريع، الولاية...).",
};

const PLACEHOLDERS: Record<Lang, string> = {
  fr: "Écrivez votre question...",
  en: "Type your question...",
  ar: "اكتب سؤالك...",
  darija: "كتب السؤال ديالك...",
};

// Greeting / small-talk words (fr, en, ar, arabizi) — recognized as such, not as topics
const GREETING_WORDS = [
  "bonjour", "salut", "bonsoir", "coucou", "cava", "ca va",
  "hello", "hi", "hey", "howdy",
  "salam", "salamo", "salamu", "assalam",
  "labas", "labass", "bikhir", "bikheir", "kifach", "chnahowa",
  "ahlan", "marhaba", "sbah", "msa",
  "مرحبا", "سلام", "أهلا", "لاباس", "صباح", "مساء", "كيفاش",
];

// --- Levenshtein distance for fuzzy/typo-tolerant matching ---
function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0)
  );
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents (é->e, etc.)
    .trim();
}

// Fuzzy match, but ONLY for words of 5+ chars — short words (<=4) require an
// exact or substring match. This prevents junk like "labas" (5 letters, no
// meaning here) from accidentally matching an unrelated short keyword by
// pure edit-distance luck.
function fuzzyIncludes(word: string, keyword: string): boolean {
  const w = normalize(word);
  const k = normalize(keyword);
  if (w.length === 0 || k.length === 0) return false;
  if (w === k) return true;
  if (k.length <= 4 || w.length <= 4) {
    return w.includes(k) || k.includes(w);
  }
  if (w.includes(k) || k.includes(w)) return true;
  const maxDist = k.length <= 6 ? 1 : k.length <= 9 ? 2 : 3;
  return levenshtein(w, k) <= maxDist;
}

function scoreEntry(entry: ChatEntry, words: string[]): number {
  let score = 0;
  for (const kw of entry.keywords) {
    const kwWords = normalize(kw).split(/\s+/);
    for (const kwWord of kwWords) {
      for (const w of words) {
        if (fuzzyIncludes(w, kwWord)) {
          score += kwWord.length >= 5 ? 2 : 1;
        }
      }
    }
  }
  return score;
}

function isGreetingOnly(words: string[]): boolean {
  if (words.length === 0 || words.length > 4) return false;
  return words.every((w) =>
    GREETING_WORDS.some((g) => normalize(g) === normalize(w))
  );
}

// Minimum score required before we trust a topic match. Below this we treat
// the message as unrecognized rather than risk a wrong-topic answer.
const MIN_SCORE = 2;

function findBestAnswer(message: string, lang: Lang): string {
  const words = normalize(message)
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);

  if (isGreetingOnly(words)) {
    return GREETING_REPLY[lang];
  }

  let bestEntry: ChatEntry | null = null;
  let bestScore = 0;

  for (const entry of chatKnowledgeBase) {
    if (entry.id === "default") continue;
    const score = scoreEntry(entry, words);
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  const fallback = chatKnowledgeBase.find((e) => e.id === "default")!;
  const chosen = bestScore >= MIN_SCORE && bestEntry ? bestEntry : fallback;

  switch (lang) {
    case "fr":
      return chosen.answerFr;
    case "en":
      return chosen.answerEn;
    case "ar":
      return chosen.answerAr;
    case "darija":
      return chosen.answerDarija;
  }
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("fr");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "bot", text: GREETINGS[lang] }]);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function handleLangChange(newLang: Lang) {
    setLang(newLang);
    setMessages((prev) =>
      prev.length <= 1 ? [{ role: "bot", text: GREETINGS[newLang] }] : prev
    );
  }

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", text: trimmed };
    const answer = findBestAnswer(trimmed, lang);
    const botMsg: Message = { role: "bot", text: answer };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  const isRtl = lang === "ar" || lang === "darija";

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Ouvrir le chatbot"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#7a1f2b] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[480px] w-[340px] max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-[#7a1f2b] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              <span className="text-sm font-semibold">Assistant Chrourou</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe2 size={14} className="opacity-80" />
              {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className={`rounded px-1.5 py-0.5 text-[10px] font-bold transition-colors ${
                    lang === l ? "bg-white text-[#7a1f2b]" : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-[#faf7f2] px-3 py-4"
            dir={isRtl ? "rtl" : "ltr"}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#7a1f2b] text-white"
                      : "bg-white text-gray-800 shadow-sm border border-black/5"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-black/10 bg-white px-3 py-2" dir={isRtl ? "rtl" : "ltr"}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={PLACEHOLDERS[lang]}
              className="flex-1 rounded-full border border-black/10 bg-[#faf7f2] px-3 py-2 text-sm outline-none focus:border-[#7a1f2b]"
            />
            <button
              onClick={handleSend}
              aria-label="Envoyer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7a1f2b] text-white transition-transform hover:scale-105 active:scale-95"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
