export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="group flex items-center gap-3">
      <span
        className={`flex size-10 items-center justify-center rounded-2xl transition duration-500 ease-smooth group-hover:scale-105 ${
          inverted
            ? "bg-white shadow-lifted"
            : "bg-gradient-to-br from-brand-500 to-brand-700 shadow-brand"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className={`size-5 ${inverted ? "text-brand-600" : "text-white"}`}
        >
          <path
            d="M6 3.5h8.5L19 8v12.5H6z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12.5h5M9.5 16h3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={`text-lg font-semibold tracking-[-0.02em] ${
          inverted ? "text-white" : "text-slate-900"
        }`}
      >
        Quotely
      </span>
    </span>
  );
}
