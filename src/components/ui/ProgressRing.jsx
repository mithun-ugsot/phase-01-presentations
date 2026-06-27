import { motion } from 'framer-motion'

export default function ProgressRing({
  percent,
  size = 72,
  stroke = 6,
  color = '#1d4ed8',
  label,
  sublabel,
  active = false,
  compact = false,
}) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <div
      className={`flex flex-col items-center rounded-lg border transition-all ${
        compact ? 'p-1' : 'p-2'
      } ${active ? 'border-brand-200 bg-brand-50/50' : 'border-slate-200 bg-slate-50/50'}`}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e2e8f0" strokeWidth={stroke} />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, delay: 0.15 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold tabular-nums text-slate-900 md:text-base">{percent}%</span>
        </div>
      </div>
      {label && (
        <p className="mt-1 line-clamp-1 text-center text-[10px] font-semibold text-slate-800">{label}</p>
      )}
      {sublabel && (
        <p className="line-clamp-1 text-center text-[9px] text-slate-500">{sublabel}</p>
      )}
    </div>
  )
}
