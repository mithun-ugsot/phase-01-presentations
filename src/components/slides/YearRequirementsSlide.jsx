import { motion } from 'framer-motion'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import TrackIcon from '../illustrations/TrackIcons'
import { CAREER_TRACKS, YEAR_REQUIREMENTS, YEAR_TARGETS } from '../../data/trackData'

const CATEGORY_COLORS = ['#c9001f', '#059669', '#d97706', '#7c3aed', '#0891b2']

function CategoryCard({ category, index, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 + index * 0.05 }}
      className={`rounded-lg border border-slate-200 bg-white p-3 ${className}`}
      style={{ borderLeftWidth: 3, borderLeftColor: CATEGORY_COLORS[index % CATEGORY_COLORS.length] }}
    >
      <p className="text-xs font-bold text-slate-900">{category.title}</p>
      <ul className="mt-2 space-y-1.5">
        {category.items.map((item) => (
          <li key={item} className="flex gap-2 text-[11px] leading-snug text-slate-700">
            <span className="mt-0.5 shrink-0 text-brand-700">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function TrackMentorshipSection({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 + index * 0.05 }}
      className="rounded-lg border border-slate-200 bg-white p-3"
      style={{ borderLeftWidth: 3, borderLeftColor: CATEGORY_COLORS[index % CATEGORY_COLORS.length] }}
    >
      <p className="text-xs font-bold text-slate-900">{category.title}</p>
      <p className="mt-0.5 text-[10px] text-slate-500">Guest sessions organised by career track</p>

      <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {category.trackSessions.map((group) => {
          const track = CAREER_TRACKS[group.trackId]

          return (
            <div
              key={group.trackId}
              className="rounded-md border border-slate-200 bg-slate-50/80 p-2.5"
              style={{ borderTopWidth: 2, borderTopColor: track.color }}
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="rounded p-0.5" style={{ backgroundColor: track.light }}>
                  <TrackIcon trackId={track.id} color={track.color} />
                </div>
                <p className="text-[11px] font-bold text-slate-900">{track.title}</p>
              </div>
              <ul className="space-y-1.5">
                {group.sessions.map((session) => (
                  <li key={session} className="flex gap-1.5 text-[10px] leading-snug text-slate-700">
                    <span className="mt-0.5 shrink-0" style={{ color: track.color }}>•</span>
                    {session}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

function YearRequirementsSlide({ direction, yearId }) {
  const req = YEAR_REQUIREMENTS[yearId]
  const targets = YEAR_TARGETS[yearId]
  const isYear01 = yearId === 'year01'

  return (
    <SlideFrame direction={direction}>
      <SlideCard
        eyebrow={`${req.label} Requirements`}
        title={req.title}
        subtitle={req.subtitle}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
              Enablers
            </span>
            <span className="text-xs text-slate-600">
              Supporting targets: <span className="font-semibold text-slate-800">{targets.title}</span>
            </span>
          </div>

          {isYear01 ? (
            <div className="space-y-2.5">
              {req.categories.map((category, i) =>
                category.trackSessions ? (
                  <TrackMentorshipSection key={category.title} category={category} index={i} />
                ) : (
                  <CategoryCard key={category.title} category={category} index={i} />
                ),
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {req.categories.map((category, i) => (
                <CategoryCard key={category.title} category={category} index={i} />
              ))}
            </div>
          )}

          <p className="text-center text-[10px] text-slate-500">
            Infrastructure for all students · mentorship aligned to each career track
          </p>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}

export function Year01RequirementsSlide(props) {
  return <YearRequirementsSlide {...props} yearId="year01" />
}

export function Year02RequirementsSlide(props) {
  return <YearRequirementsSlide {...props} yearId="year02" />
}

export function Year03RequirementsSlide(props) {
  return <YearRequirementsSlide {...props} yearId="year03" />
}

export function Year04RequirementsSlide(props) {
  return <YearRequirementsSlide {...props} yearId="year04" />
}
