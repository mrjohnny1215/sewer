import {
  ArrowRight,
  BadgeCheck,
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
import { useState } from 'react'
import { companyInfo, process as workProcess, reviews, services, strengths } from './data/siteData'

const PHONE_LINK = 'tel:010-4154-0084'
const KAKAO_LINK = 'https://pf.kakao.com/'

const imageForService = [
  '/img/service_toilet.png',
  '/img/service_drain.png',
  '/img/service_sink.png',
  '/img/service_leak.png',
  '/img/service_faucet.png',
  '/img/service_pipe.png',
]

const imageAltForService = [
  '변기 막힘과 배수 문제',
  '하수구 막힘과 배관 청소',
  '싱크대 배수와 역류 점검',
  '첨단 장비를 활용한 누수 탐지',
  '수전과 설비 부품 교체',
  '상하수도와 배관 공사',
]

const trustBadges = [
  { src: '/img/badge_quote.png', alt: '투명한 견적 안내', width: 338, height: 339 },
  { src: '/img/badge_zero.png', alt: '미해결 시 비용 0원', width: 338, height: 339 },
  { src: '/img/badge_time.png', alt: '시간 예약 가능', width: 338, height: 339 },
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

const navigation = [
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
    <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
      <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-700 sm:text-xs">{eyebrow}</p>
      <h2 className="break-keep text-[clamp(1.55rem,6vw,2.5rem)] font-black leading-tight tracking-[-0.04em] text-slate-900">{title}</h2>
      {description && <p className="mx-auto mt-3 max-w-xl break-keep text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">{description}</p>}
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
          <span className="text-lg font-black tracking-tight text-slate-900">해냄설비</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="주요 메뉴">
          {navigation.map(([label, href]) => <a key={href} href={href} className="inline-flex min-h-12 items-center text-sm font-bold text-slate-600 transition hover:text-blue-700">{label}</a>)}
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
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center border-b border-slate-100 px-1 text-sm font-bold text-slate-700 last:border-0">{label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-slate-50 px-3 py-3 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-2xl border border-slate-200 bg-[#07182a] shadow-[0_18px_55px_rgba(15,23,42,.12)] sm:rounded-3xl">
        <img
          src="/img/hero_banner.png"
          alt="역류하고 막혀서 답답할 땐? 해냄설비가 시원하게 뚫어냅니다! 무료 전화상담 010-4154-0084"
          width="2752"
          height="1536"
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full object-contain"
        />
      </div>
      <div className="mx-auto mt-3 max-w-[1440px] sm:mt-5">
        <PhoneLink className="call-pulse flex min-h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-blue-700 px-4 text-base font-black text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-800 sm:min-h-16 sm:text-lg">
          <PhoneCall size={21} /> 무료 전화상담 <span className="whitespace-nowrap">{companyInfo.phone}</span> <ArrowRight size={18} />
        </PhoneLink>
      </div>
      <h1 className="sr-only">역류하고 막혀서 답답할 땐? 해냄설비가 시원하게 뚫어냅니다!</h1>
    </section>
  )
}

function TrustBadges() {
  return (
    <section className="bg-white px-4 py-4 sm:px-7 sm:py-7" aria-label="해냄설비 서비스 약속">
      <div className="mx-auto grid max-w-3xl grid-cols-3 divide-x divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,.07)] sm:rounded-3xl">
        {trustBadges.map(({ src, alt, width, height }, index) => (
          <div key={src} className="grid min-h-24 place-items-center px-1.5 py-2 sm:min-h-36 sm:px-4 sm:py-3">
            <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" style={{ animationDelay: `${index * 0.35}s` }} className="badge-float block h-auto w-full max-w-28 object-contain drop-shadow-md" />
          </div>
        ))}
      </div>
    </section>
  )
}

function ServiceGrid() {
  return (
    <section id="services" className="scroll-mt-20 bg-slate-50 px-4 py-14 sm:px-7 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="HAENAEM SERVICES" title="막힘부터 누수까지, 한 번에" description="현장을 꼼꼼히 확인하고 문제에 맞는 방법으로 작업합니다." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="group min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:rounded-3xl sm:p-4">
                <img
                  src={imageForService[index]}
                  alt={imageAltForService[index]}
                  width="338"
                  height="339"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full rounded-xl object-contain sm:rounded-2xl"
                />
                <div className="flex min-h-12 items-center gap-2 px-1 pt-2 sm:min-h-14 sm:px-2">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700 sm:size-9"><Icon size={17} /></span>
                  <h3 className="min-w-0 break-keep text-[13px] font-black leading-5 text-slate-900 sm:text-base">{service.title}</h3>
                </div>
                <p className="hidden px-2 pb-1 pt-1 text-sm leading-6 text-slate-600 sm:block">{service.desc}</p>
                <PhoneLink className="mt-1 flex min-h-12 items-center gap-1.5 rounded-xl px-2 text-xs font-extrabold text-blue-700 hover:bg-blue-50 sm:mt-2 sm:text-sm">
                  <Phone size={14} /> 전화 상담 <ChevronRight size={15} />
                </PhoneLink>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function BeforeAfter() {
  return (
    <section id="work" className="scroll-mt-20 bg-white px-4 py-14 sm:px-7 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="BEFORE & AFTER" title="막힌 배관, 달라진 흐름" description="작업 전후 배관 상태를 한눈에 비교해보세요." />
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
    <section id="promise" className="scroll-mt-20 overflow-hidden bg-slate-900 px-4 py-14 text-white sm:px-7 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
        <div>
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[.18em] text-cyan-300 sm:text-xs">HONEST SERVICE</p>
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
    <section id="process" className="scroll-mt-20 bg-slate-50 px-4 py-14 sm:px-7 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="SIMPLE PROCESS" title="접수부터 책임 시공까지" description="작업 범위와 비용을 먼저 안내한 뒤, 합의된 내용대로 진행합니다." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {workProcess.map(({ step, title, desc, icon: Icon }) => (
            <article key={step} className="rounded-2xl border border-slate-200 bg-white p-4 sm:rounded-3xl sm:p-6">
              <div className="flex items-center justify-between"><span className="text-[10px] font-extrabold tracking-widest text-blue-700 sm:text-xs">STEP 0{step}</span><span className="grid size-9 place-items-center rounded-xl bg-blue-50 text-blue-700 sm:size-11"><Icon size={19} /></span></div>
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
  return (
    <section className="bg-white px-4 py-14 sm:px-7 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="WHY HAENAEM" title="해냄설비를 선택하는 이유" description="꼼꼼한 점검과 정직한 설명으로 믿을 수 있는 서비스를 제공합니다." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {strengths.map(({ title, desc, icon: Icon }, index) => (
            <article key={title} className="min-h-32 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:min-h-0 sm:rounded-3xl sm:p-6">
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
    <section id="reviews" className="scroll-mt-20 bg-slate-50 px-4 py-14 sm:px-7 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="CUSTOMER REVIEWS" title="고객님이 남겨주신 후기" description="상담과 작업 과정에서 느끼신 점을 확인해보세요." />
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
                <BadgeCheck className="ml-auto text-blue-600" size={18} aria-label="고객 후기" />
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
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div><p className="text-[11px] font-extrabold tracking-[.16em] text-blue-100">HAENAEM PLUMBING CARE</p><h2 className="mt-2 break-keep text-2xl font-black tracking-tight sm:text-3xl">불편한 순간, 해냄설비에 전화하세요.</h2><p className="mt-2 text-sm text-blue-100">증상을 듣고 가능한 방문 일정을 안내해드립니다.</p></div>
          <PhoneLink className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-white px-6 font-black text-blue-800 shadow-lg sm:w-auto"><PhoneCall size={20} /> {companyInfo.phone} <ArrowRight size={18} /></PhoneLink>
        </div>
      </section>
      <footer className="bg-slate-950 px-4 py-7 text-slate-300 sm:px-7 sm:py-9">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="inline-flex min-h-12 items-center gap-2 font-black text-white"><Droplets size={19} className="text-cyan-400" />{companyInfo.name}</a>
          <p className="text-xs">배관·설비 상담 <PhoneLink className="font-bold text-white">{companyInfo.phone}</PhoneLink></p>
          <p className="text-[11px] text-slate-400">© {new Date().getFullYear()} 해냄설비. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2.5 border-t border-slate-200 bg-white/95 p-2.5 pb-[max(.625rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <a href={KAKAO_LINK} target="_blank" rel="noreferrer" className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#fee500] px-2 text-sm font-black text-[#332d08]" aria-label="카카오톡 문의 열기">
        <MessageCircle size={19} /> 카카오톡 문의
      </a>
      <PhoneLink className="call-pulse flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-700 px-2 text-sm font-black text-white" aria-label={`전화걸기 ${companyInfo.phone}`}>
        <PhoneCall size={19} /> 전화걸기
      </PhoneLink>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-24 font-sans text-slate-900 md:pb-0">
      <style>{`@keyframes callGlow{0%,100%{box-shadow:0 0 0 0 rgba(37,99,235,.2),0 8px 22px rgba(30,64,175,.16)}50%{box-shadow:0 0 0 7px rgba(37,99,235,0),0 10px 27px rgba(30,64,175,.22)}}@keyframes callSweep{0%,58%{transform:translateX(-180%) skewX(-22deg);opacity:0}66%{opacity:.55}82%,100%{transform:translateX(420%) skewX(-22deg);opacity:0}}@keyframes badgeFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.call-pulse{position:relative;isolation:isolate;overflow:hidden;animation:callGlow 2.4s ease-out infinite}.call-pulse:before{position:absolute;z-index:0;top:-35%;bottom:-35%;left:0;width:32%;transform:translateX(-180%) skewX(-22deg);background:linear-gradient(90deg,transparent,rgba(255,255,255,.34),transparent);content:'';pointer-events:none;animation:callSweep 3.8s ease-in-out infinite}.call-pulse>*{position:relative;z-index:1}.badge-float{animation:badgeFloat 3.2s ease-in-out infinite}@media(prefers-reduced-motion:reduce){.call-pulse,.call-pulse:before,.badge-float{animation:none}}`}</style>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
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
