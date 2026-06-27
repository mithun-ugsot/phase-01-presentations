const icons = {
  core: (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
      <rect x="8" y="14" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M16 14V10a8 8 0 0116 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 22h32" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  openSource: (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
      <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M21 20l-4 8M27 20l4 8M18 32h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  startup: (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
      <path d="M24 8l4 10h10l-8 7 3 11-9-6-9 6 3-11-8-7h10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  research: (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
      <path d="M18 8h12v6H18z" stroke="currentColor" strokeWidth="2" />
      <path d="M24 14v8M16 36h16M20 36l-2-14h12l-2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  higherStudies: (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
      <path d="M8 20l16-8 16 8-16 8-16-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 24v8c0 2 3.5 4 8 4s8-2 8-4v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

export default function TrackIcon({ trackId, color }) {
  return (
    <div style={{ color }} className="shrink-0">
      {icons[trackId]}
    </div>
  )
}
