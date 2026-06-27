import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import { APPROACH_PILLARS } from '../../data/trackData'

export default function ApproachSlide({ direction }) {
  const [active, setActive] = useState(APPROACH_PILLARS[0])

  return (
    <SlideFrame direction={direction}>
      <SlideCard
        eyebrow="Our Approach"
        title="How We Get There"
        subtitle="Ten pillars driving every cohort"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr]">
          <div className="grid grid-cols-5 gap-1.5 content-start">
            {APPROACH_PILLARS.map((pillar, i) => (
              <motion.button
                key={pillar.id}
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.03 + i * 0.02 }}
                onMouseEnter={() => setActive(pillar)}
                onClick={() => setActive(pillar)}
                className={`rounded-lg border px-1.5 py-2 text-left transition-all ${
                  active.id === pillar.id
                    ? 'border-brand-300 bg-brand-50 ring-1 ring-brand-100'
                    : 'border-slate-200 bg-slate-50 hover:bg-white'
                }`}
              >
                <span className="text-sm text-brand-700">{pillar.icon}</span>
                <p className="mt-1 text-[9px] font-semibold leading-tight text-slate-800 md:text-[10px]">
                  {pillar.title}
                </p>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col justify-center rounded-lg border border-brand-100 bg-brand-50/40 p-4"
            >
              <span className="text-2xl text-brand-700">{active.icon}</span>
              <h3 className="mt-2 text-sm font-bold text-slate-900 md:text-base">{active.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{active.summary}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}
