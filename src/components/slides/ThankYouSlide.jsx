import { motion } from 'framer-motion'
import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import BrandLogo from '../ui/BrandLogo'

export default function ThankYouSlide({ direction }) {
  return (
    <SlideFrame direction={direction}>
      <SlideCard noHeader className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-brand-100/60 blur-3xl" />

        <div className="flex flex-col items-center px-2 py-4 text-center md:py-8">
          <BrandLogo variant="dark" size="hero" className="mx-auto object-center" />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-xs font-semibold uppercase tracking-widest text-brand-700"
          >
            UpGrad School of Technology
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl"
          >
            Thank You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-md text-base text-slate-600 md:text-lg"
          >
            Full Stack Development Track · Year 01 Progress &amp; Roadmap
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2"
          >
            <span className="text-sm font-medium text-slate-600">
              <span className="font-semibold text-slate-900">Mithun S</span> · Track Lead
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-6 text-sm text-slate-500"
          >
            Questions &amp; discussion
          </motion.p>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}
