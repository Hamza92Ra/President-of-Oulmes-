
type SourceBadgeProps = {
  source: string;
  url: string;
  date?: string;
};

export default function SourceBadge({
  source,
  url,
  date,
}: SourceBadgeProps) {
  return (
    <div className="inline-flex flex-col gap-1 border-l-2 border-green-moroccan/60 pl-3 py-1 text-sm">
      <span className="uppercase text-[10px] tracking-[0.15em] text-ink/50">
        Source
      </span>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-ink hover:text-green-moroccan underline underline-offset-2"
      >
        {source}
      </a>

      {date && (
        <span className="text-xs text-ink/50">
          {date}
        </span>
      )}
    </div>
  );
}

