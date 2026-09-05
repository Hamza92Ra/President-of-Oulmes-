import { TimelineEvent } from "@/content/timeline";
import { useLanguage } from "@/content/LanguageContext";
import { localize } from "@/lib/localize";

type Props = {
  event: TimelineEvent;
  isLast?: boolean;
};

export default function TimelineItem({ event, isLast }: Props) {
  const { lang, t } = useLanguage();

  return (
    <div className="relative pl-8 pb-10">
      <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-green-moroccan" />

      {!isLast && (
        <span className="absolute left-[5px] top-4 bottom-0 w-px bg-clay/40" />
      )}

      <span className="block text-sm font-semibold text-green-moroccan mb-1">
        {event.year}
      </span>

      <h3 className="text-lg font-medium text-ink mb-1">
        {localize(event, "title", lang)}
      </h3>

      {event.descriptionFr && (
        <p className="text-sm text-ink/70 mb-2">
          {localize(event, "description", lang)}
        </p>
      )}

      {event.source && (
        <a
          href={event.source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-ink/50 underline underline-offset-2"
        >
          {t("common.source")}: {event.source.name}
        </a>
      )}
    </div>
  );
}