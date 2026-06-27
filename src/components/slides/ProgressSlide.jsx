import { useState } from 'react'
import { motion } from 'framer-motion'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import ProgressRing from '../ui/ProgressRing'
import { YEAR_ONE, YEAR_ONE_PROGRESS } from '../../data/trackData'

const TABS = [
  { id: 'content', data: YEAR_ONE_PROGRESS.content },
  { id: 'projects', data: YEAR_ONE_PROGRESS.projects },
  { id: 'recordings', data: YEAR_ONE_PROGRESS.recordings },
]

export default function ProgressSlide({ direction }) {
  const [activeTab, setActiveTab] = useState('content')
  const tab = TABS.find((t) => t.id === activeTab)
  const overall = YEAR_ONE_PROGRESS.overall

  return (
    <SlideFrame direction={direction}>
      <SlideCard
        eyebrow="Progress Report"
        title={`${YEAR_ONE.label} Progress`}
        subtitle={YEAR_ONE.subtitle}
        className="!p-4 md:!p-5"
      >
        <div className="grid gap-3 md:grid-cols-2 md:gap-4">
          <div className="space-y-2.5">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 rounded-lg border border-brand-100 bg-brand-50/50 p-2.5"
            >
              <ProgressRing
                percent={overall.percent}
                label={overall.label}
                sublabel="Complete"
                active
                size={72}
                stroke={6}
                color="#c9001f"
                compact
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-slate-900 md:text-sm">
                  {overall.percent}% of Year 01 delivered
                </p>
                <p className="mt-0.5 text-[10px] leading-snug text-slate-600">{overall.detail}</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${overall.percent}%` }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-brand-700"
                  />
                </div>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-1">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  className={`rounded-md px-2 py-0.5 text-[10px] font-medium transition-colors md:text-[11px] ${
                    activeTab === t.id
                      ? 'bg-brand-700 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t.data.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {TABS.map((t) => (
                <ProgressRing
                  key={t.id}
                  percent={t.data.percent}
                  label={t.data.label}
                  sublabel={t.data.status}
                  active={activeTab === t.id}
                  size={64}
                  stroke={4}
                  color={activeTab === t.id ? '#c9001f' : '#94a3b8'}
                  compact
                />
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2"
            >
              <p className="text-[11px] font-semibold text-slate-900">{tab.data.status}</p>
              <p className="mt-0.5 text-[10px] leading-snug text-slate-600">{tab.data.detail}</p>
              <TabProgressBar tab={activeTab} data={tab.data} />
              {activeTab === 'recordings' && (
                <div className="mt-1.5 flex gap-1.5">
                  <StatusChip label="Sem 01 Projects" done={tab.data.projectsDone} />
                  <StatusChip label="Sem 01 Recordings" done={tab.data.recordingsDone} />
                </div>
              )}
            </motion.div>
          </div>

          <div className="grid gap-2 content-start">
            {YEAR_ONE_PROGRESS.semesters.map((sem) => (
              <SemesterCard key={sem.id} sem={sem} />
            ))}
            <CapstoneCard data={YEAR_ONE_PROGRESS.capstone} />
          </div>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}

function TabProgressBar({ tab, data }) {
  const configs = {
    content: {
      label: 'Year 01 content',
      value: data.valueText ?? `${data.completed} / ${data.total} semesters`,
    },
    projects: { label: 'Year 01 projects', value: `${data.completed} / ${data.total}` },
    recordings: { label: 'Year 01 recordings', value: `${data.completed} / ${data.total} semesters` },
  }
  const { label, value } = configs[tab]

  return (
    <div className="mt-1.5">
      <div className="mb-0.5 flex justify-between text-[9px] text-slate-500">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${data.percent}%` }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full bg-brand-700"
        />
      </div>
    </div>
  )
}

function CapstoneCard({ data }) {
  return (
    <div className="rounded-lg border border-brand-200 bg-brand-50/40 p-2.5">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-xs font-bold text-slate-900">{data.label}</p>
        <span className="shrink-0 rounded-full bg-amber-100 px-1.5 py-0.5 text-[8px] font-semibold uppercase text-amber-700">
          {data.status}
        </span>
      </div>
      <p className="text-[10px] leading-snug text-slate-600">{data.detail}</p>
      <div className="mt-2">
        <div className="mb-0.5 flex justify-between text-[9px] text-slate-500">
          <span>Completed</span>
          <span>
            {data.completed} / {data.total}
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${data.percent}%` }}
            transition={{ duration: 0.8 }}
            className="h-full rounded-full bg-brand-700"
          />
        </div>
      </div>
      <div className="mt-2 flex justify-between gap-1">
        {Array.from({ length: data.total }, (_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${
              i < data.completed ? 'bg-brand-700' : 'bg-slate-200'
            }`}
            title={`Capstone ${i + 1}`}
          />
        ))}
      </div>
      <p className="mt-1.5 text-center text-[11px] font-bold tabular-nums text-brand-800">{data.percent}%</p>
    </div>
  )
}

function SemesterCard({ sem }) {
  const isComplete = sem.status === 'complete'
  const isActive = sem.status === 'in_progress'
  const statusLabel = isComplete ? 'Complete' : isActive ? 'In Progress' : 'Upcoming'

  const cardClass = isComplete
    ? 'border-emerald-200 bg-emerald-50/60'
    : isActive
      ? 'border-amber-200 bg-amber-50/60'
      : 'border-slate-200 bg-white'

  const badgeClass = isComplete
    ? 'bg-emerald-100 text-emerald-700'
    : isActive
      ? 'bg-amber-100 text-amber-700'
      : 'bg-slate-100 text-slate-500'

  return (
    <div className={`rounded-lg border p-2.5 ${cardClass}`}>
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-xs font-bold text-slate-900">{sem.label}</p>
        <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-semibold uppercase ${badgeClass}`}>
          {statusLabel}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <MetricColumn label="Content" percent={sem.content} />
        <MetricColumn label="Projects" percent={sem.projects} />
        <MetricColumn label="Recordings" percent={sem.recordings} />
      </div>
    </div>
  )
}

function MetricColumn({ label, percent }) {
  return (
    <div className="text-center">
      <p className="text-[9px] text-slate-500">{label}</p>
      <p className="text-[11px] font-bold tabular-nums text-slate-800">{percent}%</p>
      <div className="mx-auto mt-1 flex h-7 w-1.5 flex-col justify-end overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: `${percent}%` }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full rounded-full bg-brand-600"
        />
      </div>
    </div>
  )
}

function StatusChip({ label, done }) {
  return (
    <span
      className={`rounded px-1.5 py-0.5 text-[9px] font-medium ${
        done ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
      }`}
    >
      {label}: {done ? 'Done' : 'Pending'}
    </span>
  )
}
