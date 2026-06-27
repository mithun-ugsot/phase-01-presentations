import { motion } from 'framer-motion'
import { CAREER_TRACKS, SPECIALIZATION_TRACKS } from '../../data/trackData'

const NODES = [
  { track: SPECIALIZATION_TRACKS[0], cx: 200, cy: 140, label: ['Open', 'Source'] },
  { track: SPECIALIZATION_TRACKS[1], cx: 400, cy: 140, label: ['Startup'] },
  { track: SPECIALIZATION_TRACKS[2], cx: 200, cy: 220, label: ['Research'] },
  { track: SPECIALIZATION_TRACKS[3], cx: 400, cy: 220, label: ['Higher', 'Studies'] },
]

export default function PathwayHub() {
  const core = CAREER_TRACKS.core

  return (
    <div className="w-full max-w-2xl px-2">
      <svg viewBox="0 0 600 360" className="h-auto w-full min-h-[220px] md:min-h-[280px]" aria-hidden="true">
        {NODES.map(({ track, cx, cy }, i) => (
          <motion.line
            key={track.id}
            x1="300"
            y1="180"
            x2={cx}
            y2={cy}
            stroke={track.color}
            strokeWidth="2.5"
            strokeDasharray="6 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.2 + i * 0.08 }}
          />
        ))}

        <motion.circle
          cx="300"
          cy="180"
          r="58"
          fill={core.light}
          stroke={core.color}
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: '300px 180px' }}
        />
        <text
          x="300"
          y="172"
          textAnchor="middle"
          fill={core.color}
          style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Inter, sans-serif' }}
        >
          CORE
        </text>
        <text
          x="300"
          y="192"
          textAnchor="middle"
          fill={core.color}
          style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Inter, sans-serif' }}
        >
          DEVELOPMENT
        </text>

        {NODES.map(({ track, cx, cy, label }, i) => (
          <motion.g
            key={track.id}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 + i * 0.08 }}
          >
            <circle cx={cx} cy={cy} r="44" fill={track.light} stroke={track.color} strokeWidth="2.5" />
            {label.map((line, li) => (
              <text
                key={line}
                x={cx}
                y={cy - (label.length > 1 ? 5 : 0) + li * 15}
                textAnchor="middle"
                fill={track.color}
                style={{ fontSize: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}
              >
                {line}
              </text>
            ))}
          </motion.g>
        ))}
      </svg>

      <p className="mt-1 text-center text-xs text-slate-500">
        Every pathway builds on a shared Core Development foundation
      </p>
    </div>
  )
}
