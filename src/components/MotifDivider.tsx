export default function MotifDivider() {
  return (
    <div className="max-w-6xl mx-auto px-6" aria-hidden="true">
      <svg
        width="100%"
        height="24"
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        className="text-clay/40"
      >
        <line x1="0" y1="12" x2="150" y2="12" stroke="currentColor" strokeWidth="1" />
        <polygon points="200,2 210,12 200,22 190,12" fill="currentColor" />
        <line x1="250" y1="12" x2="400" y2="12" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
