type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl mb-10 ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <span className="block text-xs uppercase tracking-[0.2em] text-green-moroccan font-medium mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-ink leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink/70 leading-relaxed">{description}</p>
      )}
    </div>
  );
}