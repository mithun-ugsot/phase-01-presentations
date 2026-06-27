import { motion } from 'framer-motion'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import TrackIcon from '../illustrations/TrackIcons'
import { CAREER_TRACKS, YEAR_TARGETS, BTECH_PROGRAM } from '../../data/trackData'

function YearTargetsSlide({ direction, yearId }) {
  const year = YEAR_TARGETS[yearId]

  return (
    <SlideFrame direction={direction}>
      <SlideCard
        eyebrow={`${year.label} Targets`}
        title={year.title}
        subtitle={year.subtitle}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <span className="rounded-md bg-brand-700 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
              {year.label} · B.Tech
            </span>
            <span className="text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Coverage:</span> {year.coverage}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-600">
              {year.tracks.length} pathway targets
            </span>
            {year.milestone && (
              <>
                <span className="text-xs text-slate-400">·</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                  {year.milestone}
                </span>
              </>
            )}
          </div>

          {(yearId === 'year03' || yearId === 'year04') && (
            <p className="rounded-md border border-brand-100 bg-brand-50/50 px-3 py-2 text-[11px] text-brand-900">
              <span className="font-semibold">{BTECH_PROGRAM.strategy}</span>
            </p>
          )}

          <div
            className={`grid gap-2.5 ${
              year.tracks.length === 4 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {year.tracks.map((entry, i) => {
              const track = CAREER_TRACKS[entry.trackId]

              return (
                <motion.div
                  key={entry.trackId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className="rounded-lg border border-slate-200 bg-white p-3"
                  style={{ borderTopWidth: 3, borderTopColor: track.color }}
                >
                  <div className="flex items-start gap-2.5">
                    <div className="rounded-md p-1" style={{ backgroundColor: track.light }}>
                      <TrackIcon trackId={track.id} color={track.color} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900">{track.title}</p>
                      <p className="text-[10px] text-slate-500">{track.tagline}</p>
                    </div>
                  </div>

                  <ul className="mt-2.5 space-y-1.5">
                    {entry.targets.map((target) => (
                      <li key={target} className="flex gap-2 text-[11px] leading-snug text-slate-700">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: track.color }}
                        />
                        {target}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}

export function Year01TargetsSlide(props) {
  return <YearTargetsSlide {...props} yearId="year01" />
}

export function Year02TargetsSlide(props) {
  return <YearTargetsSlide {...props} yearId="year02" />
}

export function Year03TargetsSlide(props) {
  return <YearTargetsSlide {...props} yearId="year03" />
}

export function Year04TargetsSlide(props) {
  return <YearTargetsSlide {...props} yearId="year04" />
}
