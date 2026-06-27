import { motion } from 'framer-motion'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import { SEM2_PROJECTS } from '../../data/trackData'

export default function Sem2ProjectsSlide({ direction }) {
  const projectCount = SEM2_PROJECTS.names.length

  return (
    <SlideFrame direction={direction}>
      <SlideCard
        eyebrow="Project Portfolio"
        title="Semester 2 Projects Overview"
        subtitle={`${projectCount} hands-on builds · ${projectCount} of 76 Year 1 projects`}
        className="!p-4 md:!p-5"
      >
        <div className="grid gap-3 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-brand-700 px-2.5 py-1 text-lg font-bold tabular-nums text-white">
                {projectCount}
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900">Projects in Sem 02</p>
                <p className="text-[10px] text-slate-500">From JS logic to React apps, Redux & AI builds</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {SEM2_PROJECTS.featured.map((project, i) => (
                <motion.figure
                  key={project.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
                >
                  <div className="aspect-[5/4] overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="border-t border-slate-100 px-1.5 py-1">
                    <p className="line-clamp-2 text-[8px] font-medium leading-tight text-slate-700 md:text-[9px]">
                      {project.name}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>

            <div className="flex flex-wrap gap-1">
              {SEM2_PROJECTS.topics.map((topic) => (
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
              Full project list
            </p>
            <ul className="grid min-h-0 flex-1 grid-cols-2 gap-x-2 gap-y-0.5 overflow-hidden">
              {SEM2_PROJECTS.names.map((name, i) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.02 + i * 0.012 }}
                  className="flex items-start gap-1 text-[9px] leading-snug text-slate-700 md:text-[10px]"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-[8px] text-brand-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="line-clamp-2">{name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}
