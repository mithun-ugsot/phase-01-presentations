import { motion } from 'framer-motion'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import TrackIcon from '../illustrations/TrackIcons'
import { CAREER_TRACKS, SPECIALIZATION_TRACKS } from '../../data/trackData'

const core = CAREER_TRACKS.core

export default function PathwaysDetailSlide({ direction }) {
  return (
    <SlideFrame direction={direction}>
      <SlideCard
        eyebrow="Pathway Outcomes"
        title="Where Our Graduates Go"
        subtitle="Measurable outcomes for students and stakeholders"
      >
        <div className="space-y-3">
          <div className="grid shrink-0 grid-cols-3 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
            {[
              { stat: '5', label: 'Career Tracks' },
              { stat: '1', label: 'Foundation' },
              { stat: '100%', label: 'Core-First' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="text-center"
              >
                <p className="text-base font-bold text-brand-800 md:text-lg">{s.stat}</p>
                <p className="text-[9px] font-medium uppercase tracking-wider text-slate-500">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="relative shrink-0 rounded-lg border border-brand-200 bg-brand-50/60 p-3"
          >
            <span className="absolute right-2 top-2 rounded-full bg-brand-700 px-1.5 py-0.5 text-[8px] font-semibold uppercase text-white">
              Foundation
            </span>
            <div className="flex items-center gap-3">
              <div className="rounded-md p-1.5" style={{ backgroundColor: core.light }}>
                <TrackIcon trackId="core" color={core.color} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase text-brand-700">{core.tagline}</p>
                <p className="text-sm font-bold text-slate-900">{core.title}</p>
                <p className="text-[11px] text-slate-600">{core.summary}</p>
              </div>
              <div className="hidden flex-wrap gap-1 sm:flex">
                {core.outcomes.map((o) => (
                  <span key={o} className="rounded border border-brand-200 bg-white px-1.5 py-0.5 text-[9px] font-medium text-brand-800">
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {SPECIALIZATION_TRACKS.map((track, i) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="flex flex-col rounded-lg border border-slate-200 bg-white p-2.5"
              >
                <div className="flex items-start gap-2">
                  <div className="rounded-md p-1" style={{ backgroundColor: track.light }}>
                    <TrackIcon trackId={track.id} color={track.color} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase" style={{ color: track.color }}>
                      {track.tagline}
                    </p>
                    <p className="text-xs font-bold text-slate-900">{track.title}</p>
                  </div>
                </div>
                <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-slate-600">{track.summary}</p>
                <div className="mt-auto flex flex-wrap gap-1 pt-1.5">
                  {track.outcomes.map((o) => (
                    <span
                      key={o}
                      className="rounded px-1.5 py-0.5 text-[8px] font-medium"
                      style={{ backgroundColor: track.light, color: track.color }}
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="shrink-0 text-center text-[10px] text-slate-500">
            <span className="font-semibold text-slate-700">Employers:</span> placement pipeline ·{' '}
            <span className="font-semibold text-slate-700">Ecosystem:</span> founders, researchers & OSS
          </p>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}
