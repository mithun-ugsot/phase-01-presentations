import { motion } from 'framer-motion'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'

const goals = [
  { label: 'Today', desc: 'Production-ready from graduation' },
  { label: 'Tomorrow', desc: 'Adaptable to emerging tech' },
  { label: 'Always', desc: 'Professional engineering mindset' },
]

export default function VisionSlide({ direction }) {
  return (
    <SlideFrame direction={direction}>
      <SlideCard
        eyebrow="Our Aim"
        title="Future-Ready Full Stack Engineers"
        subtitle="Built for today and tomorrow"
      >
        <div className="space-y-4">
          <motion.blockquote
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-lg border border-brand-100 bg-brand-50/60 p-4"
          >
            <p className="text-sm font-medium leading-relaxed text-slate-800">
              Build highly professional full stack developers who can serve
              <span className="font-semibold text-brand-800"> not just today&apos;s requirements</span>,
              but <span className="font-semibold text-brand-800">tomorrow&apos;s challenges</span> too.
            </p>
          </motion.blockquote>

          <div className="grid grid-cols-3 gap-3">
            {goals.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                className="flex flex-col items-center rounded-lg border border-slate-200 bg-slate-50 p-3 text-center"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-700 text-[10px] font-bold text-white">
                  {g.label.slice(0, 1)}
                </div>
                <p className="mt-2 text-xs font-semibold text-slate-900">{g.label}</p>
                <p className="mt-0.5 text-[10px] leading-snug text-slate-500">{g.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-1.5">
            {['Industry-Ready', 'Research-Driven', 'Startup-Minded', 'Open Source'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}
