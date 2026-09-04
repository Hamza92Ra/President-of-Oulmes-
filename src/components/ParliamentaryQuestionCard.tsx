import { ParliamentQuestion } from "@/content/parliament";
import SourceBadge from "./SourceBadge";

type Props = {
  question: ParliamentQuestion;
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ParliamentaryQuestionCard({ question }: Props) {
  return (
    <div className="border border-clay/30 bg-ivory p-5 flex flex-col gap-3">
      <span className="inline-block w-fit text-[10px] uppercase tracking-[0.15em] bg-green-moroccan/10 text-green-moroccan px-2 py-1">
        {question.category}
      </span>

      <h3 className="text-lg font-semibold leading-snug text-ink">
        {question.titleFr}
      </h3>

      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink/70">
        <span>
          <strong className="text-ink/50 uppercase text-[10px] tracking-[0.1em] block">
            Date
          </strong>
          {formatDate(question.date)}
        </span>
        {question.ministry && (
          <span>
            <strong className="text-ink/50 uppercase text-[10px] tracking-[0.1em] block">
              Ministère
            </strong>
            {question.ministry}
          </span>
        )}
      </div>

      {question.descriptionFr && (
        <p className="text-sm text-ink/80">{question.descriptionFr}</p>
      )}

      <div className="text-sm text-ink/60 italic">
        {question.responseStatus}
      </div>

      <SourceBadge source={question.source.name} url={question.source.url} />
    </div>
  );
}