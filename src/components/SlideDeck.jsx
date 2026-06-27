import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'
import SlideIndicator from './SlideIndicator'
import BrandLogo from './ui/BrandLogo'
import TitleSlide from './slides/TitleSlide'
import VisionSlide from './slides/VisionSlide'
import ApproachSlide from './slides/ApproachSlide'
import PathwaysOverviewSlide from './slides/PathwaysOverviewSlide'
import PathwaysDetailSlide from './slides/PathwaysDetailSlide'
import TeamSlide from './slides/TeamSlide'
import CurriculumSlide from './slides/CurriculumSlide'
import ProgressSlide from './slides/ProgressSlide'
import Sem1ProjectsSlide from './slides/Sem1ProjectsSlide'
import Sem2ProjectsSlide from './slides/Sem2ProjectsSlide'
import CapstoneSlide from './slides/CapstoneSlide'
import { Year01TargetsSlide } from './slides/YearTargetsSlide'
import { Year01RequirementsSlide } from './slides/YearRequirementsSlide'
import ThankYouSlide from './slides/ThankYouSlide'

const SLIDES = [
  { id: 'title', component: TitleSlide, label: 'Intro' },
  { id: 'vision', component: VisionSlide, label: 'Aim' },
  { id: 'approach', component: ApproachSlide, label: 'Approach' },
  { id: 'pathways', component: PathwaysOverviewSlide, label: 'Pathways' },
  { id: 'pathway-detail', component: PathwaysDetailSlide, label: 'Outcomes' },
  { id: 'team', component: TeamSlide, label: 'Team' },
  { id: 'curriculum', component: CurriculumSlide, label: 'Curriculum' },
  { id: 'progress', component: ProgressSlide, label: 'Progress' },
  { id: 'sem1-projects', component: Sem1ProjectsSlide, label: 'S1 Projects' },
  { id: 'sem2-projects', component: Sem2ProjectsSlide, label: 'S2 Projects' },
  { id: 'capstone', component: CapstoneSlide, label: 'Capstone' },
  { id: 'y1-targets', component: Year01TargetsSlide, label: 'Y1 Targets' },
  { id: 'y1-req', component: Year01RequirementsSlide, label: 'Y1 Req' },
  { id: 'thanks', component: ThankYouSlide, label: 'Thanks' },
]

export default function SlideDeck() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback((index) => {
    if (index < 0 || index >= SLIDES.length || index === current) return
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [next, prev])

  const ActiveSlide = SLIDES[current].component

  return (
    <div className="slide-grid-bg flex h-[100dvh] w-full flex-col overflow-hidden">
      <header className="flex h-[var(--deck-header-h)] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <BrandLogo variant="dark" size="header" />
          <div className="hidden min-w-0 border-l border-slate-200 pl-3 sm:block">
            <p className="truncate text-xs font-semibold text-slate-900 md:text-sm">
              Full Stack Development Track
            </p>
            <p className="truncate text-[10px] text-slate-500 md:text-xs">4-Year B.Tech · Progress &amp; Targets</p>
          </div>
        </div>
        <SlideIndicator slides={SLIDES} current={current} onSelect={goTo} />
      </header>

      <main className="slide-viewport px-[var(--deck-gutter)] py-4 md:py-5">
        <div className="slide-stage">
          <AnimatePresence mode="wait" custom={direction}>
            <ActiveSlide key={SLIDES[current].id} direction={direction} />
          </AnimatePresence>
        </div>
      </main>

      <Navigation
        current={current}
        total={SLIDES.length}
        slideLabel={SLIDES[current].label}
        onPrev={prev}
        onNext={next}
      />
    </div>
  )
}
