import SlideFrame, { SlideCard } from '../ui/SlideFrame'
import BrandLogo from '../ui/BrandLogo'
import { TOTAL_PROJECTS } from '../../data/trackData'

export default function TitleSlide({ direction }) {
  return (
    <SlideFrame direction={direction}>
      <SlideCard noHeader className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-100/60 blur-3xl" />

        <div className="flex flex-col items-center px-2 py-2 text-center md:py-4">
          <BrandLogo variant="dark" size="hero" className="mx-auto object-center" />

          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand-700">
            4-Year B.Tech Program
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Full Stack Development
            <span className="mt-1 block text-brand-700">Track Updates</span>
          </h1>

          <p className="mt-4 max-w-lg text-base text-slate-600">
            Building the world&apos;s finest full stack developers
          </p>

          <div className="mt-6 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium text-slate-600">
              Presented by <span className="font-semibold text-slate-900">Mithun S</span> · Track Lead
            </span>
          </div>

          <div className="mt-8 grid w-full max-w-lg grid-cols-4 gap-2">
            {[
              { n: '4', l: 'Years' },
              { n: '2', l: 'Campuses' },
              { n: '4', l: 'Semesters' },
              { n: `${TOTAL_PROJECTS}+`, l: 'Projects' },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-slate-200 bg-white px-2 py-3 md:px-3">
                <p className="text-lg font-bold text-brand-800 md:text-xl">{s.n}</p>
                <p className="text-[10px] text-slate-500 md:text-xs">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideCard>
    </SlideFrame>
  )
}
