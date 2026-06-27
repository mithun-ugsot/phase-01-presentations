import { motion } from 'framer-motion'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import PathwayHub from '../illustrations/PathwayHub'

const insights = [
  { label: 'One Foundation', desc: 'Shared core curriculum for all students' },
  { label: 'Five Outcomes', desc: 'Clear paths aligned to student ambition' },
  { label: 'Zero Compromise', desc: 'Industry-ready regardless of track chosen' },
]

export default function PathwaysOverviewSlide({ direction }) {
  return (
    <SlideFrame direction={direction}>
      <SlideCard
        eyebrow="Career Pathways"
        title="One Core. Five Destinations."
        subtitle="Serving students, employers, and the innovation ecosystem"
      >
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[1.45fr_0.9fr] lg:gap-6">
          <div className="flex w-full items-center justify-center py-1 lg:py-2">
            <PathwayHub />
          </div>

          <div className="flex flex-col justify-center gap-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="rounded-lg border border-brand-100 bg-brand-50/50 p-3"
            >
              <p className="text-xs font-semibold text-brand-900">Strategic Model</p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                All students master Core Development first — then specialise toward employment,
                open source, entrepreneurship, research, or higher studies.
              </p>
            </motion.div>

            {insights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-700 text-[9px] font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">{item.label}</p>
                  <p className="text-[10px] text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}
