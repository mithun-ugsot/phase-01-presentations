import { motion } from 'framer-motion'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import { YEAR_ONE_CAPSTONES } from '../../data/trackData'

const STATUS_STYLES = {
  complete: {
    badge: 'bg-emerald-100 text-emerald-700',
    label: 'Complete',
  },
  in_progress: {
    badge: 'bg-amber-100 text-amber-700',
    label: 'In Progress',
  },
  upcoming: {
    badge: 'bg-slate-100 text-slate-500',
    label: 'Upcoming',
  },
}

export default function CapstoneSlide({ direction }) {
  const { projects } = YEAR_ONE_CAPSTONES
  const inProgress = projects.filter((p) => p.status === 'in_progress').length
  const delivered = projects.filter((p) => p.status === 'complete' || p.status === 'in_progress').length

  return (
    <SlideFrame direction={direction}>
      <SlideCard
        eyebrow="Capstone Portfolio"
        title={`${YEAR_ONE_CAPSTONES.label} Capstone Projects`}
        subtitle={YEAR_ONE_CAPSTONES.subtitle}
        className="!p-4 md:!p-5"
      >
        <div className="grid gap-3 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-brand-700 px-2.5 py-1 text-lg font-bold tabular-nums text-white">
                {projects.length}
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900">Capstone builds in Year 01</p>
                <p className="text-[10px] text-slate-500">
                  {delivered} of {projects.length} started · Dynamic UI in progress
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {projects.map((project, i) => {
                const style = STATUS_STYLES[project.status] ?? STATUS_STYLES.upcoming

                return (
                  <motion.figure
                    key={project.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    className={`overflow-hidden rounded-lg border bg-white shadow-sm ${
                      project.status === 'in_progress' ? 'border-amber-300 ring-1 ring-amber-100' : 'border-slate-200'
                    }`}
                  >
                    <div className="relative aspect-[5/4] overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                      <span
                        className={`absolute right-1 top-1 rounded-full px-1 py-0.5 text-[7px] font-semibold uppercase ${style.badge}`}
                      >
                        {style.label}
                      </span>
                    </div>
                    <figcaption className="border-t border-slate-100 px-1.5 py-1">
                      <p className="line-clamp-2 text-[8px] font-medium leading-tight text-slate-700 md:text-[9px]">
                        {project.name}
                      </p>
                    </figcaption>
                  </motion.figure>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-1">
              {['Architecture', 'Integration', 'Distributed Systems', 'Production APIs'].map((topic) => (
                <span
                  key={topic}
                  className="rounded-md border border-brand-100 bg-brand-50 px-2 py-0.5 text-[9px] font-medium text-brand-800"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="flex min-h-0 flex-col rounded-lg border border-slate-200 bg-slate-50/80 p-2.5">
            <p className="mb-2 shrink-0 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Capstone overview
            </p>
            <ul className="grid min-h-0 flex-1 grid-cols-1 gap-y-2 overflow-hidden">
              {projects.map((project, i) => {
                const style = STATUS_STYLES[project.status] ?? STATUS_STYLES.upcoming

                return (
                  <motion.li
                    key={project.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.02 + i * 0.04 }}
                    className="rounded-md border border-slate-200 bg-white p-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="flex items-start gap-1 text-[9px] font-semibold leading-snug text-slate-900 md:text-[10px]">
                        <span className="shrink-0 font-mono text-[8px] text-brand-600">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="line-clamp-2">{project.name}</span>
                      </p>
                      <span
                        className={`shrink-0 rounded-full px-1.5 py-0.5 text-[7px] font-semibold uppercase ${style.badge}`}
                      >
                        {style.label}
                      </span>
                    </div>
                    <p className="mt-1 pl-4 text-[9px] leading-snug text-slate-600">{project.summary}</p>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}
