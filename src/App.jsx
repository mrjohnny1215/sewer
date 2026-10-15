import {
  ArrowRight,
  Check,
  ChevronRight,
  Droplets,
  FileCheck2,
  Menu,
  MessageCircle,
  Phone,
  PhoneCall,
  ShieldCheck,
  Star,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { companyInfo, process as workProcess, reviews, services, strengths } from './data/siteData'

const PHONE_LINK = 'tel:010-4154-0084'

const serviceImages = [
  '/img/service_toilet.png',
  '/img/service_drain.png',
  '/img/service_sink.png',
  '/img/service_leak.png',
  '/img/service_faucet.png',
  '/img/service_pipe.png',
]

const serviceImageAlts = [
  '변기 막힘과 배수 문제',
  '하수구 막힘과 배관 청소',
  '싱크대 배수와 역류 점검',
  '첨단 장비를 이용한 누수 탐지',
  '수전과 설비 부품 교체',
  '상하수도와 배관 공사',
]

const serviceSummaries = [
  '변기와 배관의 막힘 원인을 확인합니다.',
  '악취와 역류 원인을 살펴 배관을 청소합니다.',
  '주방 배수 정체와 역류 상태를 점검합니다.',
  '누수 의심 부위를 확인해 수리 범위를 안내합니다.',
  '수전과 밸브 등 필요한 부품을 교체합니다.',
  '상하수도 배관과 방수 상태를 점검합니다.',
]

const promises = [
  {
    title: '원인 사전 설명',
    description: '작업 전 문제 원인과 필요한 조치를 이해하기 쉽게 설명합니다.',
    icon: MessageCircle,
  },
  {
    title: '사전 합의 정찰 견적',
    description: '현장을 확인한 뒤 작업 범위와 비용을 먼저 안내하고 동의를 구합니다.',
    icon: FileCheck2,
  },
  {
    title: '무리한 과잉 시공 지양',
    description: '꼭 필요한 작업을 제안하고 불필요한 교체나 시공은 권하지 않습니다.',
    icon: ShieldCheck,
  },
]

const navItems = [
  ['서비스', '#services'],
  ['작업 사례', '#work'],
  ['작업 과정', '#process'],
  ['고객 후기', '#reviews'],
]

function PhoneLink({ children, className = '', ...props }) {
  return <a href={PHONE_LINK} className={className} {...props}>{children}</a>
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-9">
      <p className="mb-2 inline-flex min-h-9 items-center rounded-full bg-blue-50 px-3 text-sm font-black text-blue-800 sm:min-h-10 sm:px-4 sm:text-base">{eyebrow}</p>
      <h2 className="break-keep text-[clamp(1.55rem,6vw,2.5rem)] font-black leading-[1.25] tracking-[-.04em] text-slate-900">{title}</h2>
      {description && <p className="mx-auto mt-2 max-w-xl break-keep text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">{description}</p>}
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-7">
        <a href="#home" className="inline-flex min-h-12 items-center gap-2.5" aria-label="해냄설비 홈">
          <span className="grid size-9 place-items-center rounded-xl bg-blue-700 text-white sm:size-10"><Droplets size={21} /></span>
          <span className="text-lg font-black tracking-tight text-slate-900">{companyInfo.name}</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="주요 메뉴">
          {navItems.map(([label, href]) => <a key={href} href={href} className="inline-flex min-h-12 items-center text-sm font-bold text-slate-600 transition hover:text-blue-700">{label}</a>)}
        </nav>
        <PhoneLink className="hidden min-h-12 items-center gap-2 rounded-xl bg-blue-700 px-4 text-sm font-extrabold text-white shadow-sm transition hover:bg-blue-800 md:inline-flex">
          <Phone size={17} /> 전화 상담 <span className="hidden lg:inline">{companyInfo.phone}</span>
        </PhoneLink>
        <button
          type="button"
          className="grid size-12 place-items-center rounded-xl text-slate-800 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <Menu size={23} />
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="border-t border-slate-100 bg-white px-4 py-2 md:hidden" aria-label="모바일 메뉴">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center border-b border-slate-100 px-1 text-sm font-bold text-slate-700 last:border-0">{label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

function DispatchBoard() {
  return (
    <section className="dispatch-board mx-auto my-3 w-[calc(100%-1.5rem)] max-w-md overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 p-4 text-center text-white shadow-xl shadow-slate-950/15 sm:w-full" aria-label="실시간 배차 안내">
      <div className="mb-2 flex items-center justify-center gap-2">
        <span className="relative flex size-3 shrink-0">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
        </span>
        <span className="text-xs font-bold tracking-wide text-emerald-300 sm:text-sm">실시간 배차 시스템 가동 중</span>
      </div>
      <p className="text-xs font-bold text-slate-300 sm:text-sm">평균 출동 안내</p>
      <div className="timer-flash py-1 text-4xl font-black leading-tight tracking-tight text-amber-400 drop-shadow-[0_0_24px_rgba(251,191,36,0.6)] sm:text-5xl">
        28분 <span className="px-1 text-amber-200 sm:px-2">~</span> 33분
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-[#07182a] pb-5 pt-2 sm:px-6 sm:pb-8 sm:pt-6">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden bg-[#07182a] shadow-xl sm:rounded-2xl sm:border sm:border-slate-200">
          <div className="hero-banner relative">
            <img
              src="/img/hero_banner.png"
              alt="역류하고 막혀서 답답할 땐? 해냄설비가 시원하게 뚫어냅니다! 무료 전화상담 010-4154-0084"
              width="1024"
              height="572"
              fetchPriority="high"
              decoding="async"
              className="mx-auto block h-auto w-full max-w-lg object-contain sm:max-w-full"
            />
            <span className="hero-title-motion" aria-hidden="true">
              {'해냄설비'.split('').map((letter, index) => <span key={letter} style={{ animationDelay: `${index * 380}ms` }}>{letter}</span>)}
            </span>
          </div>
        </div>
        <DispatchBoard />
      </div>
    </section>
  )
}

function ServiceGrid() {
  return (
    <section id="services" className="scroll-mt-20 bg-sky-50 px-4 py-9 sm:px-7 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="해냄설비 주요 서비스" title="막힘부터 누수까지" description="현장을 확인하고 필요한 작업과 비용을 먼저 안내합니다." />
        <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-4">
          {services.map((service, index) => (
            <PhoneLink key={service.title} aria-label={`${service.title} 전화 상담`} className="group flex min-h-[94px] min-w-0 items-center gap-3 rounded-2xl border border-sky-200 bg-white p-2.5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md sm:min-h-[112px] sm:gap-4 sm:p-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-500 sm:size-8"><Check size={18} strokeWidth={3} /></span>
              <span className="min-w-0 flex-1">
                <span className="block break-keep text-[15px] font-black leading-5 text-slate-900 sm:text-base">{service.title}</span>
                <span className="mt-1 block break-keep text-[11px] leading-[1.45] text-slate-600 sm:text-xs">{serviceSummaries[index]}</span>
                <span className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-extrabold text-blue-700 sm:text-[11px]">전화 상담 <ChevronRight size={12} /></span>
              </span>
              <img src={serviceImages[index]} alt={serviceImageAlts[index]} width="338" height="339" loading="lazy" decoding="async" className="h-[62px] w-[82px] shrink-0 rounded-xl border border-slate-100 object-cover object-top sm:h-[78px] sm:w-[102px]" />
            </PhoneLink>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-max rounded-full bg-slate-900 px-4 py-2 text-center text-[10px] font-semibold leading-4 text-white sm:mt-5 sm:text-xs">※ 작업 범위와 비용은 현장 상태를 확인한 뒤 안내해드립니다.</p>
      </div>
    </section>
  )
}

function BeforeAfter() {
  return (
    <section id="work" className="scroll-mt-20 bg-white px-4 py-9 sm:px-7 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="작업 전 · 작업 후 비교" title="막힌 배관, 달라진 흐름" description="작업 전후 배관 상태를 한눈에 비교해보세요." />
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm sm:rounded-3xl">
          <img src="/img/before_after.png" alt="배관 세척 전 오염된 상태와 작업 후 깨끗해진 상태 비교" width="2048" height="1024" loading="lazy" decoding="async" className="block h-auto w-full object-contain" />
          <figcaption className="grid grid-cols-2 gap-3 p-3 sm:gap-5 sm:p-5">
            <span className="flex min-h-12 items-center justify-center rounded-xl bg-rose-50 text-sm font-black text-rose-700">작업 전 · 막힘 확인</span>
            <span className="flex min-h-12 items-center justify-center rounded-xl bg-blue-50 text-sm font-black text-blue-700">작업 후 · 배수 확인</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function PromiseSection() {
  return (
    <section id="promise" className="scroll-mt-20 overflow-hidden bg-slate-900 px-4 py-10 text-white sm:px-7 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
        <div>
          <p className="mb-2 text-sm font-black text-cyan-300 sm:text-base">정직한 시공 약속</p>
          <h2 className="break-keep text-3xl font-black leading-tight tracking-tight sm:text-5xl">상담부터 마무리까지,<br />투명하게</h2>
          <p className="mt-4 max-w-lg break-keep text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base">작업 전 충분히 설명하고, 동의하신 범위 안에서만 작업합니다. 해결되지 않은 문제에는 비용을 청구하지 않습니다.</p>
          <PhoneLink className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 text-sm font-black text-slate-900 transition hover:bg-cyan-50">
            <Phone size={17} /> 전화로 먼저 상담하기 <ArrowRight size={16} />
          </PhoneLink>
        </div>
        <div className="divide-y divide-white/15 border-y border-white/15">
          {promises.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="grid grid-cols-[30px_44px_1fr_18px] items-center gap-3 py-4 sm:grid-cols-[40px_50px_1fr_20px] sm:gap-4 sm:py-5">
              <span className="text-xs font-black tracking-widest text-cyan-300">0{index + 1}</span>
              <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-cyan-200 sm:size-12"><Icon size={21} /></span>
              <div><h3 className="break-keep text-sm font-black sm:text-base">{title}</h3><p className="mt-1 break-keep text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">{description}</p></div>
              <Check size={18} className="text-cyan-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-20 bg-slate-50 px-4 py-9 sm:px-7 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="간편한 작업 과정" title="접수부터 책임 시공까지" description={<>작업 범위와 비용을 먼저 안내한 뒤,<br />합의된 내용대로 진행합니다.</>} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {workProcess.map(({ step, title, desc, icon: Icon }) => (
            <article key={step} className="rounded-2xl border border-slate-200 bg-white p-4 sm:rounded-3xl sm:p-6">
              <div className="flex items-center justify-between"><span className="text-xs font-extrabold tracking-wide text-blue-700 sm:text-sm">0{step} 단계</span><span className="grid size-9 place-items-center rounded-xl bg-blue-50 text-blue-700 sm:size-11"><Icon size={19} /></span></div>
              <h3 className="mt-4 break-keep text-base font-black text-slate-900 sm:mt-5 sm:text-lg">{title}</h3>
              <p className="mt-2 hidden text-xs leading-6 text-slate-600 sm:block sm:text-sm">{Array.isArray(desc) ? desc.join(' ') : desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StrengthSection() {
  const gridRef = useRef(null)
  const [stepsVisible, setStepsVisible] = useState(false)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid || !('IntersectionObserver' in window)) {
      setStepsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStepsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.2 })

    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-white px-4 py-9 sm:px-7 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="해냄설비가 다른 이유" title="해냄설비를 선택하는 이유" description="꼼꼼한 점검과 정직한 설명으로 믿을 수 있는 서비스를 제공합니다." />
        <div ref={gridRef} className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {strengths.map(({ title, desc, icon: Icon }, index) => (
            <article key={title} style={{ animationDelay: `${index * 1.5}s` }} className={`strength-step min-h-32 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:min-h-0 sm:rounded-3xl sm:p-6 ${stepsVisible ? 'strength-step-visible' : ''}`}>
              <div className="flex items-center justify-between"><span className="text-[10px] font-bold tracking-widest text-slate-400">0{index + 1}</span><span className="grid size-9 place-items-center rounded-xl bg-blue-50 text-blue-700 sm:size-11"><Icon size={19} /></span></div>
              <h3 className="mt-3 break-keep text-sm font-black text-slate-900 sm:mt-5 sm:text-base">{title}</h3>
              <p className="mt-2 hidden text-sm leading-6 text-slate-600 sm:block">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-slate-50 px-4 py-9 sm:px-7 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="고객님들의 이용 후기" title="고객님이 남겨주신 후기" description="상담과 작업 과정에서 느끼신 점을 확인해보세요." />
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {reviews.slice(0, 5).map((review) => (
            <article key={`${review.name}-${review.service}`} className="flex min-h-48 flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:min-h-56 sm:rounded-3xl sm:p-6">
              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-0.5 text-amber-500" role="img" aria-label={`${review.rating}점 만점에 ${review.rating}점`}>
                  {Array.from({ length: review.rating }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} />)}
                </div>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-800 sm:text-xs">{review.service}</span>
              </div>
              <p className="mt-4 flex-1 break-keep text-sm leading-6 text-slate-700 sm:mt-5 sm:text-[15px] sm:leading-7">“{review.text}”</p>
              <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 sm:mt-5 sm:pt-4">
                <span className="grid size-9 place-items-center rounded-full bg-slate-100 text-sm font-black text-slate-600">{review.name.slice(0, 1)}</span>
                <div><p className="text-xs font-extrabold text-slate-800">{review.name}</p><p className="mt-0.5 text-[10px] text-slate-500">{review.location}</p></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactFooter() {
  return (
    <>
      <section id="contact" className="bg-blue-700 px-4 py-10 text-white sm:px-7 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div><p className="text-sm font-black text-blue-100 sm:text-base">해냄설비 배관·설비 상담</p><h2 className="mt-2 break-keep text-2xl font-black tracking-tight sm:text-3xl">불편한 순간, 해냄설비에 전화하세요.</h2><p className="mt-2 text-sm leading-6 text-blue-100">증상을 듣고 가능한 방문 일정을 안내해드립니다.</p></div>
          <PhoneLink className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-white px-6 font-black text-blue-800 shadow-lg sm:w-auto"><PhoneCall size={20} /> {companyInfo.phone} <ArrowRight size={18} /></PhoneLink>
        </div>
      </section>
      <footer className="bg-slate-950 px-4 py-7 text-slate-300 sm:px-7 sm:py-9">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="inline-flex min-h-12 items-center gap-2 font-black text-white"><Droplets size={19} className="text-cyan-400" />{companyInfo.name}</a>
          <p className="text-xs">배관·설비 상담 <PhoneLink className="font-bold text-white">{companyInfo.phone}</PhoneLink></p>
          <p className="text-[11px] text-slate-400">© {new Date().getFullYear()} 해냄설비</p>
        </div>
      </footer>
    </>
  )
}

function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 pb-[max(.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <PhoneLink className="call-pulse flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-blue-700 px-3 text-sm font-black text-white" aria-label={`전화걸기 ${companyInfo.phone}`}>
        <PhoneCall size={19} /> 전화걸기
      </PhoneLink>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-28 font-sans text-slate-900 md:pb-0">
      <style>{`@keyframes callGlow{0%,100%{box-shadow:0 0 0 0 rgba(37,99,235,.2),0 8px 22px rgba(30,64,175,.16)}50%{box-shadow:0 0 0 7px rgba(37,99,235,0),0 10px 27px rgba(30,64,175,.22)}}@keyframes callSweep{0%,58%{transform:translateX(-180%) skewX(-22deg);opacity:0}66%{opacity:.55}82%,100%{transform:translateX(420%) skewX(-22deg);opacity:0}}@keyframes timerFlash{0%,100%{opacity:1;text-shadow:0 0 12px rgba(251,191,36,.25),0 0 24px rgba(251,191,36,.28)}50%{opacity:.95;text-shadow:0 0 18px rgba(251,191,36,.62),0 0 36px rgba(251,191,36,.55)}}@keyframes strengthStepFocus{0%,100%{transform:translateY(0) scale(1);border-color:#e2e8f0;box-shadow:0 1px 3px rgba(15,23,42,.04)}12%,28%{transform:translateY(-2px) scale(1.025);border-color:#3b82f6;box-shadow:0 0 0 5px rgba(59,130,246,.12),0 12px 26px rgba(37,99,235,.12)}40%{transform:translateY(0) scale(1);border-color:#e2e8f0;box-shadow:0 1px 3px rgba(15,23,42,.04)}}@keyframes heroTitleShine{0%,12%,100%{transform:translateY(0);background-position:120% 0;filter:brightness(1) drop-shadow(0 1px 3px rgba(255,190,70,.08))}18%{transform:translateY(-2px);background-position:45% 0;filter:brightness(1.38) drop-shadow(0 0 7px rgba(255,197,77,.72))}25%{transform:translateY(0);background-position:-25% 0;filter:brightness(1.08) drop-shadow(0 1px 3px rgba(255,190,70,.22))}.hero-banner{container-type:inline-size}.hero-title-motion{position:absolute;top:25.2%;left:5.7%;display:flex;align-items:center;gap:0;width:44%;height:21%;font-family:'Noto Sans KR',sans-serif;font-size:clamp(30px,9.4cqw,96px);font-weight:900;letter-spacing:-.09em;line-height:1;white-space:nowrap;pointer-events:none}.hero-title-motion>span{color:transparent;background:linear-gradient(105deg,rgba(255,251,226,.08) 10%,rgba(255,247,213,.86) 42%,rgba(255,188,56,.98) 52%,rgba(255,251,226,.12) 76%);background-size:240% 100%;background-position:120% 0;background-clip:text;-webkit-background-clip:text;animation:heroTitleShine 5.2s ease-in-out infinite}.call-pulse{position:relative;isolation:isolate;overflow:hidden;animation:callGlow 2.4s ease-out infinite}.call-pulse:before{position:absolute;z-index:0;top:-35%;bottom:-35%;left:0;width:32%;transform:translateX(-180%) skewX(-22deg);background:linear-gradient(90deg,transparent,rgba(255,255,255,.34),transparent);content:"";pointer-events:none;animation:callSweep 3.8s ease-in-out infinite}.call-pulse>*{position:relative;z-index:1}.timer-flash{animation:timerFlash 1.8s ease-in-out infinite}.dispatch-board{backdrop-filter:blur(12px)}.strength-step-visible{animation:strengthStepFocus 9s ease-in-out infinite}@media(prefers-reduced-motion:reduce){.call-pulse,.call-pulse:before,.timer-flash,.strength-step-visible,.hero-title-motion>span{animation:none}}`}</style>
      <Header />
      <main>
        <Hero />
        <ServiceGrid />
        <BeforeAfter />
        <PromiseSection />
        <ProcessSection />
        <StrengthSection />
        <Reviews />
        <ContactFooter />
      </main>
      <MobileActionBar />
    </div>
  )
}
