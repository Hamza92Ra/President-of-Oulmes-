type StatCardProps = {
  value: string;
  label: string;
  sublabel?: string;
  source?: {
    name: string;
    url: string;
  };
};

export default function StatCard({
  value,
  label,
  sublabel,
  source,
}: StatCardProps) {
  return (
    <div className="border-t-2 border-ink/80 pt-4 flex flex-col gap-1 group relative">
      <span className="text-4xl md:text-5xl font-semibold text-ink">
        {value}
      </span>

      <span className="text-sm text-ink/70">{label}</span>

      {sublabel && (
        <span className="text-xs text-ink/50">{sublabel}</span>
      )}

      {source && (
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-green-moroccan underline underline-offset-2 mt-1 w-fit"
          title={`Source: ${source.name}`}
        >
          Source: {source.name}
        </a>
      )}
    </div>
  );
}