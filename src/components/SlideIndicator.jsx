export default function SlideIndicator({ slides, current, onSelect }) {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden items-center gap-0.5 lg:flex">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Go to ${slide.label}`}
            title={slide.label}
            className={`rounded px-2 py-1 text-[11px] font-medium transition-colors ${
              i === current
                ? 'bg-brand-100 text-brand-800'
                : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
            }`}
          >
            {slide.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-1 lg:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? 'w-4 bg-brand-700' : 'w-1.5 bg-slate-300'
            }`}
          />
        ))}
      </div>

      <span className="font-mono text-[11px] text-slate-400">
        {String(current + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
      </span>
    </div>
  )
}
