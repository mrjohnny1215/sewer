import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Clock3,
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
import { companyInfo, reviews, services } from './data/siteData'

const PHONE_LINK = 'tel:010-4154-0084'
const KAKAO_LINK = 'https://pf.kakao.com/'

const trustBadges = [
  { image: '/img/badge_quote.png', alt: '투명한 사전 견적 안내' },
  { image: '/img/badge_zero.png', alt: '미해결 시 비용 0원' },
  { image: '/img/badge_time.png', alt: '원하는 시간 예약 가능' },
]

const serviceImages = [
  '/img/service_toilet.png',
  '/img/service_drain.png',
  '/img/service_sink.png',
  '/img/service_leak.png',
  '/img/service_faucet.png',
  '/img/service_pipe.png',
]

const promises = [
  {
    number: '01',
    title: '원인 사전 설명',
    description: '작업을 시작하기 전에 문제 원인과 필요한 조치를 먼저 설명합니다.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: '사전 합의 정찰 견적',
    description: '현장을 확인한 뒤 작업 범위와 비용을 안내하고 동의를 구합니다.',
    icon: FileCheck2,
  },
  {
    number: '03',
    title: '무리한 과잉 시공 지양',
    description: '상태에 꼭 필요한 작업만 제안하고 불필요한 시공은 권하지 않습니다.',
    icon: ShieldCheck,
  },
]

function PhoneButton({ children, className = '', ...props }) {
  return (
    <a href={PHONE_LINK} className={className} {...props}>
      {children}
    </a>
  )
}

function SectionTitle({ eyebrow, title, description, centered = true }) {
  return (
    <div className={`mx-auto mb-9 max-w-2xl ${centered ? 'text-center' : ''}`}>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">{description}</p>}
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    ['서비스', '#services'],
    ['작업사례', '#work'],
    ['정직한 약속', '#promise'],
    ['고객후기', '#reviews'],
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5" aria-label="해냄설비 홈">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-700 text-white shadow-sm shadow-blue-200">
            <Droplets size={22} strokeWidth={2.4} />
          </span>
          <span className="text-lg font-black tracking-tight text-slate-900">해냄설비</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-bold text-slate-600 transition hover:text-blue-700">{label}</a>
          ))}
        </nav>

        <PhoneButton className="hidden items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800 md:inline-flex">
          <Phone size={16} /> 무료 전화상담 <span className="hidden lg:inline">{companyInfo.phone}</span>
        </PhoneButton>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 md:hidden"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
        >
          <Menu size={23} />
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-5 py-3 md:hidden" aria-label="모바일 메뉴">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-slate-100 py-3.5 text-sm font-bold text-slate-700 last:border-0">{label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950 text-white sm:min-h-[680px]">
      <img src="/img/hero_banner.png" alt="역류하고 막혀 답답할 땐 해냄설비가 시원하게 뚫어냅니다" className="relative z-0 block h-auto w-full sm:absolute sm:inset-0 sm:-z-20 sm:h-full sm:object-cover sm:object-center" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/15 sm:block" />
      <div className="bg-slate-950 px-5 py-6 sm:hidden">
        <PhoneButton className="call-pulse flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 text-sm font-black text-white shadow-xl shadow-blue-950/30">
          <PhoneCall size={20} /> <span>무료 전화상담 <span className="ml-1 font-semibold">010-4154-0084</span></span> <ArrowRight size={18} />
        </PhoneButton>
        <p className="mt-3 text-center text-xs text-white/65">24시간 상담 예약 · 전화 한 통으로 편하게 문의하세요</p>
      </div>
      <div className="mx-auto hidden min-h-[640px] max-w-7xl items-center px-5 py-16 sm:flex sm:min-h-[680px] sm:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-blue-100 backdrop-blur-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-300" /> 서울·수도권 배관케어 전문
          </div>
          <h1 className="max-w-3xl text-[clamp(2.45rem,8vw,5rem)] font-black leading-[1.16] tracking-[-0.055em]">
            역류하고 막혀서 답답할 땐?
            <span className="mt-1 block text-cyan-300">해냄설비가 시원하게 뚫어냅니다!</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-lg sm:leading-8">
            막힘의 원인부터 꼼꼼하게 살피고, 필요한 작업과 비용을 먼저 안내합니다.
          </p>

          <div className="mt-7 grid max-w-xl grid-cols-3 gap-2.5 sm:gap-3">
            {trustBadges.map((badge) => (
              <div key={badge.image} className="flex min-h-[90px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-2 py-3 backdrop-blur-sm sm:min-h-[106px] sm:rounded-2xl sm:px-4">
                <img src={badge.image} alt={badge.alt} className="max-h-16 max-w-full object-contain sm:max-h-[76px]" />
              </div>
            ))}
          </div>

          <PhoneButton className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 text-base font-black text-white shadow-xl shadow-blue-950/30 transition hover:bg-blue-500 sm:w-auto sm:min-w-[330px] sm:text-lg">
            <PhoneCall size={21} /> 무료 전화상담 (010-4154-0084) <ArrowRight size={19} />
          </PhoneButton>
          <p className="mt-3 text-center text-xs text-white/60 sm:text-left">24시간 상담 예약 · 전화 한 통으로 편하게 문의하세요</p>
        </div>
      </div>
      <a href="#services" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-white/65 sm:flex">
        SCROLL TO EXPLORE <ArrowDown size={14} />
      </a>
    </section>
  )
}

function ServiceGrid() {
  return (
    <section id="services" className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="HAENAEM SERVICES"
          title="막힘부터 누수까지, 한 번에"
          description="가정에서 자주 발생하는 배관 문제를 현장에 맞는 방법으로 해결합니다."
        />
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-5 sm:gap-y-7 lg:grid-cols-3">
          {services.map((service, index) => {
            return (
              <article key={service.title} className="group min-w-0">
                <a href="#contact" aria-label={`${service.title} 상담 문의`} className="block overflow-hidden rounded-2xl bg-white transition duration-300 hover:-translate-y-1">
                  <img src={serviceImages[index]} alt={`${service.title} 서비스`} loading="lazy" className="aspect-square w-full object-contain" />
                </a>
                <a href={PHONE_LINK} className="mt-2 flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 transition hover:border-blue-200 hover:text-blue-700 sm:text-sm">
                  <Phone size={14} /> 전화 상담 <ChevronRight size={14} />
                </a>
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
    <section id="work" className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="WORK RESULT" title="막힌 배관, 달라진 흐름" description="작업 전후를 한눈에 확인해보세요." />
        <figure className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/5 sm:p-3">
          <img src="/img/before_after.png" alt="배관 막힘 작업 전과 후 비교" loading="lazy" className="max-h-[620px] w-full rounded-2xl object-cover" />
          <figcaption className="flex flex-col gap-1 px-3 py-4 text-center sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <span className="font-extrabold text-slate-900">원인 확인부터 배수 상태 점검까지 꼼꼼하게</span>
            <span className="text-xs text-slate-500">작업 결과는 현장과 배관 상태에 따라 다를 수 있습니다.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function Promises() {
  return (
    <section id="promise" className="overflow-hidden bg-[#102d50] px-5 py-16 text-white sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-300">HONEST SERVICE</p>
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">견적은 투명하게,<br />작업은 정직하게.</h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-blue-100/75 sm:text-base">
            불필요한 공사나 갑작스러운 추가 비용 걱정 없이, 작업 전에 충분히 설명드리고 합의한 범위 안에서 진행합니다.
          </p>
          <PhoneButton className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 text-sm font-black text-blue-900 transition hover:bg-cyan-50">
            <Phone size={17} /> 먼저 전화로 상담하기 <ArrowRight size={16} />
          </PhoneButton>
        </div>
        <div className="divide-y divide-white/15 border-y border-white/15">
          {promises.map(({ number, title, description, icon: Icon }) => (
            <article key={number} className="grid grid-cols-[34px_44px_1fr_20px] items-center gap-3 py-5 sm:grid-cols-[42px_52px_1fr_22px] sm:gap-4 sm:py-6">
              <span className="text-xs font-black tracking-widest text-cyan-300">{number}</span>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-cyan-200 sm:h-12 sm:w-12"><Icon size={22} /></span>
              <div><h3 className="text-sm font-black sm:text-base">{title}</h3><p className="mt-1 text-xs leading-5 text-blue-100/70 sm:text-sm">{description}</p></div>
              <Check size={19} className="text-cyan-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="CUSTOMER REVIEWS" title="고객님이 남겨주신 이야기" description="친절한 설명과 꼼꼼한 작업으로 신뢰에 보답하겠습니다." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 5).map((review) => (
            <article key={`${review.name}-${review.service}`} className="flex min-h-[220px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between gap-2">
                <div className="flex text-amber-400" aria-label={`${review.rating}점 리뷰`}>
                  {Array.from({ length: review.rating }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} />)}
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-800">{review.service}</span>
              </div>
              <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">“{review.text}”</p>
              <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-sm font-black text-slate-600">{review.name.slice(0, 1)}</span>
                <div><p className="text-xs font-extrabold text-slate-800">{review.name}</p><p className="mt-0.5 text-[11px] text-slate-400">{review.location}</p></div>
                <BadgeCheck className="ml-auto text-blue-600" size={18} />
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
      <section id="contact" className="bg-blue-700 px-5 py-12 text-white sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div><p className="text-xs font-extrabold tracking-widest text-blue-200">HAENAEM PLUMBING CARE</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">불편한 순간, 해냄설비에 전화하세요.</h2><p className="mt-2 text-sm text-blue-100">증상을 듣고 가능한 방문 일정부터 안내해드립니다.</p></div>
          <PhoneButton className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-white px-6 font-black text-blue-800 shadow-lg sm:w-auto"><PhoneCall size={20} /> {companyInfo.phone} <ArrowRight size={18} /></PhoneButton>
        </div>
      </section>
      <footer className="bg-slate-950 px-5 py-8 text-slate-400 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-white"><Droplets size={19} className="text-cyan-400" /><strong className="text-sm">해냄설비</strong></div>
          <p className="text-xs">서울·수도권 배관케어 · 전화 상담 {companyInfo.phone}</p>
          <p className="text-[11px]">© {new Date().getFullYear()} 해냄설비. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 p-2.5 pb-[max(.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <a href={KAKAO_LINK} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#fee500] text-sm font-black text-[#251f00]">
        <MessageCircle size={19} /> 카카오톡 문의
      </a>
      <PhoneButton className="call-pulse relative flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-black text-white shadow-md shadow-blue-200">
        <PhoneCall size={19} /> 전화 상담
      </PhoneButton>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-20 font-sans text-slate-900 md:pb-0">
      <style>{`@keyframes callPulse{0%{box-shadow:0 0 0 0 rgba(37,99,235,.42)}70%{box-shadow:0 0 0 11px rgba(37,99,235,0)}100%{box-shadow:0 0 0 0 rgba(37,99,235,0)}}.call-pulse{animation:callPulse 2s infinite}@media(prefers-reduced-motion:reduce){.call-pulse{animation:none}}`}</style>
      <Header />
      <main>
        <Hero />
        <ServiceGrid />
        <BeforeAfter />
        <Promises />
        <Reviews />
        <ContactFooter />
      </main>
      <MobileActionBar />
    </div>
  )
}
