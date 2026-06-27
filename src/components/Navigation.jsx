export default function Navigation({ current, total, slideLabel, onPrev, onNext }) {
  const isFirst = current === 0
  const isLast = current === total - 1

  return (
    <footer className="flex h-[var(--deck-footer-h)] shrink-0 items-center justify-between border-t border-slate-200 bg-white px-4 md:px-8">
      <button
        type="button"
        onClick={onPrev}
        disabled={isFirst}
        className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 md:gap-2 md:px-4 md:py-2 md:text-sm"
      >
        <svg className="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </button>

      <div className="hidden text-center sm:block">
        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Current Section</p>
        <p className="text-xs font-semibold text-slate-800 md:text-sm">{slideLabel}</p>
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={isLast}
        className="inline-flex items-center gap-1.5 rounded-md bg-brand-700 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-40 md:gap-2 md:px-4 md:py-2 md:text-sm"
      >
        Next
        <svg className="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </footer>
  )
}
