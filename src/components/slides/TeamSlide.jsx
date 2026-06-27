import { motion } from 'framer-motion'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import { CAMPUSES } from '../../data/trackData'

export default function TeamSlide({ direction }) {
  return (
    <SlideFrame direction={direction}>
      <SlideCard
        eyebrow="The Team"
        title="Dual-Campus Delivery"
        subtitle="Bangalore & Pune — unified standards"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {CAMPUSES.map((c, ci) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + ci * 0.08 }}
              className="flex flex-col rounded-lg border border-brand-100 bg-brand-50/20 p-3"
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-700">{c.city}</p>
                  {c.lead && (
                    <p className="text-[10px] text-slate-500">
                      Campus Lead: <span className="font-semibold text-slate-700">{c.lead}</span>
                    </p>
                  )}
                </div>
                <span className="rounded bg-white px-1.5 py-0.5 text-[10px] text-slate-500 ring-1 ring-slate-200">
                  {c.members.length} trainers
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {c.members.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-2 rounded-md border border-slate-200 bg-white p-2"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[9px] font-bold text-brand-800">
                      {member.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-slate-900">{member.name}</p>
                      <p className="text-[10px] text-slate-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SlideCard>
    </SlideFrame>
  )
}
