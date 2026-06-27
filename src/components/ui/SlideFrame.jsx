import { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { slideTransition, slideVariants } from '../../utils/slideVariants'

export default function SlideFrame({ direction, children, className = '' }) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={slideTransition}
      className={`relative h-full w-full ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function SlideCard({
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  noHeader = false,
}) {
  const slotRef = useRef(null)
  const cardRef = useRef(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const slot = slotRef.current
    const card = cardRef.current
    if (!slot || !card) return

    const fit = () => {
      const available = slot.clientHeight
      const needed = card.offsetHeight
      if (available > 0 && needed > available) {
        setScale(Math.max(0.62, available / needed))
      } else {
        setScale(1)
      }
    }

    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(slot)
    observer.observe(card)
    window.addEventListener('resize', fit)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', fit)
    }
  }, [children, title, subtitle, eyebrow, noHeader])

  return (
    <div ref={slotRef} className="relative h-full w-full overflow-hidden">
      <div
        ref={cardRef}
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center',
        }}
        className={`absolute left-1/2 top-1/2 w-full max-w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:rounded-2xl md:p-5 ${className}`}
      >
        {!noHeader && (eyebrow || title) && (
          <div className="mb-3 shrink-0 border-l-4 border-brand-700 pl-3">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">{eyebrow}</p>
            )}
            {title && (
              <h2 className="mt-1 text-xl font-bold leading-tight text-slate-900 md:text-2xl">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
            )}
          </div>
        )}
        <div className="slide-card-body">{children}</div>
      </div>
    </div>
  )
}
