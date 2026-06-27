import { useState } from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import { SEMESTERS, TOTAL_PROJECTS } from '../../data/trackData'

export default function CurriculumSlide({ direction }) {
  const [active, setActive] = useState(SEMESTERS[0])

  const chartData = SEMESTERS.map((s) => ({
    name: s.label,
    value: s.projects,
    color: s.color,
  }))

  return (
    <SlideFrame direction={direction}>
      <SlideCard
        eyebrow="Curriculum"
        title="Semester Roadmap"
        subtitle={`${TOTAL_PROJECTS} projects across the track`}
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {SEMESTERS.map((sem, i) => (
              <motion.button
                key={sem.id}
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 + i * 0.04 }}
                onClick={() => setActive(sem)}
                className={`rounded-xl border p-3 text-left transition-all ${
                  active.id === sem.id
                    ? 'border-brand-300 bg-brand-50 ring-1 ring-brand-100'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700">
                    {sem.label}
                  </span>
                  <span className="rounded bg-white px-1.5 py-0.5 text-[9px] font-mono text-slate-500 ring-1 ring-slate-200">
                    {sem.projects} proj
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-900">{sem.title}</p>
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_150px]">
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                {active.label} · {active.title}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {active.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="flex h-36 flex-col rounded-xl border border-slate-200 bg-white p-2 lg:h-auto lg:min-h-[140px]">
              <p className="px-1 text-xs font-medium text-slate-500">Project split</p>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={48}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="#fff"
                      strokeWidth={2}
                    >
                      {chartData.map((entry) => (
                        <Cell
                          key={entry.name}
                          fill={entry.color}
                          opacity={entry.name === active.label ? 1 : 0.35}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}
