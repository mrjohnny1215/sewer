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
import { companyInfo, process as workProcess, reviews, services, strengths } from './data/siteData'

const PHONE_LINK = 'tel:010-4154-0084'
const KAKAO_LINK = 'https://pf.kakao.com/'

const trustPoints = [
  { label: '평균 출동 28~33분', icon: Clock3 },
  { label: '작업 전 투명 견적', icon: FileCheck2 },
  { label: '미해결 시 비용 0원', icon: Check },
  { label: '원하는 시간 예약', icon: Phone },
]

const workPhotos = [
  {
    image: 'https://images.unsplash.com/photo-1749532125405-70950966b0e5?auto=format&fit=crop&w=1100&q=85',
    alt: '욕실 배관을 점검하는 설비 기사',
    title: '욕실 배관 점검',
    credit: 'Bhagya Laxmi / Unsplash',
  },
  {
    image: 'https://images.unsplash.com/photo-1654440122140-f1fc995ddb34?auto=format&fit=crop&w=1100&q=85',
    alt: '세면대 배수구와 배관 상태',
    title: '배수구 상태 확인',
    credit: 'Daniel Dan / Unsplash',
  },
  {
    image: 'https://images.unsplash.com/photo-1758400826781-a350d02cda6e?auto=format&fit=crop&w=1100&q=85',
    alt: '수전과 물 흐름 점검',
    title: '수전·연결부 점검',
    credit: 'Jatin Saini / Unsplash',
  },
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
      <h2 className="break-keep text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
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
    <section id="home" className="relative isolate overflow-hidden bg-[#0b1d2c] text-white">
      <img src="https://images.unsplash.com/photo-1749532125405-70950966b0e5?auto=format&fit=crop&w=2200&q=90" alt="욕실 설비를 점검하는 전문 기사" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,22,36,.96)_0%,rgba(5,22,36,.82)_48%,rgba(5,22,36,.28)_100%)] sm:bg-[linear-gradient(90deg,rgba(5,22,36,.94)_0%,rgba(5,22,36,.76)_45%,rgba(5,22,36,.16)_100%)]" />
      <div className="mx-auto flex min-h-[600px] max-w-7xl items-center px-5 py-12 sm:min-h-[690px] sm:px-8 sm:py-16 lg:min-h-[720px]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-white/90 backdrop-blur-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_0_4px_rgba(94,234,212,.15)]" /> 서울·수도권 배관케어 전문
          </div>
          <h1 className="max-w-4xl text-[clamp(1.8rem,8vw,5rem)] font-black leading-[1.13] tracking-[-0.055em] sm:text-[clamp(2.7rem,4.6vw,4.75rem)]">
            <span className="block">역류하고 막혀서</span>
            <span className="block">답답할 땐?</span>
            <span className="mt-2 block text-teal-300">해냄설비가</span>
            <span className="block text-teal-300">시원하게 뚫어냅니다!</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
            현장 상태를 꼼꼼히 살피고, 필요한 작업과 비용을 먼저 안내합니다.
          </p>
          <div className="mt-5 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-2.5 sm:mt-7 sm:grid-cols-4 sm:gap-3">
            {trustPoints.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 text-xs font-semibold text-white/90 sm:rounded-xl sm:border sm:border-white/15 sm:bg-white/10 sm:px-3 sm:py-3 sm:text-[11px]">
                <Icon size={17} className="shrink-0 text-teal-300" /> {label}
              </div>
            ))}
          </div>
          <PhoneButton className="call-pulse mt-6 flex min-h-14 w-full items-center justify-between gap-2 rounded-xl bg-teal-400 px-4 text-xs font-black text-[#062324] shadow-xl shadow-black/20 transition hover:bg-teal-300 sm:mt-8 sm:inline-flex sm:w-auto sm:min-w-[310px] sm:justify-center sm:gap-3 sm:px-5 sm:text-base">
            <PhoneCall size={19} className="shrink-0" /> <span className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap">무료 전화상담 <span className="font-extrabold">010-4154-0084</span></span> <ArrowRight size={17} className="shrink-0" />
          </PhoneButton>
          <p className="mt-2 hidden text-center text-[11px] text-white/65 sm:mt-3 sm:block sm:text-left sm:text-xs">전화로 증상을 말씀해주시면 방문 일정을 안내해드립니다.</p>
        </div>
      </div>
      <a href="#services" className="absolute bottom-6 right-8 hidden items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-white/65 lg:flex">
        SERVICES <ArrowDown size={14} />
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
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-6">
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700 sm:h-12 sm:w-12"><Icon size={19} /></span>
                  <h3 className="break-keep text-[13px] font-black leading-5 tracking-tight text-slate-900 sm:text-lg">{service.title}</h3>
                </div>
                <p className="mt-3 hidden flex-1 text-[11px] leading-5 text-slate-500 sm:block sm:text-sm sm:leading-6">{service.desc}</p>
                <a href={PHONE_LINK} className="mt-3 inline-flex min-h-9 items-center gap-1 border-t border-slate-100 pt-2.5 text-[11px] font-extrabold text-teal-700 transition group-hover:text-teal-900 sm:mt-4 sm:min-h-10 sm:gap-1.5 sm:pt-3 sm:text-sm">
                  <Phone size={13} /> 전화 상담 <ChevronRight size={14} />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="HOW WE WORK" title="상담부터 마무리까지, 투명하게" description="작업 범위와 비용을 먼저 안내하고 동의하신 내용대로 진행합니다." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {workProcess.map(({ step, title, desc, icon: Icon }) => (
            <article key={step} className="min-h-[122px] rounded-2xl border border-slate-200 bg-white p-4 sm:min-h-0 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold tracking-[0.15em] text-blue-700 sm:text-xs">STEP 0{step}</span>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-700 sm:h-11 sm:w-11"><Icon size={20} /></span>
              </div>
              <h3 className="mt-4 break-keep text-base font-black text-slate-900 sm:mt-6 sm:text-lg">{title}</h3>
              <p className="mt-2 hidden text-xs leading-6 text-slate-500 sm:block sm:text-sm">{Array.isArray(desc) ? desc.join(' ') : desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StrengthSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="WHY HAENAEM" title="해냄설비를 선택하는 이유" description="현장에 맞는 방법으로 꼼꼼하게 살피고, 작업 후까지 확인합니다." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {strengths.map(({ title, desc, icon: Icon }, index) => (
            <article key={title} className="min-h-[122px] rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5 sm:min-h-0 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-slate-300">0{index + 1}</span>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-700 sm:h-11 sm:w-11"><Icon size={20} /></span>
              </div>
              <h3 className="mt-3 break-keep text-sm font-black text-slate-900 sm:mt-5 sm:text-base">{title}</h3>
              <p className="mt-2 hidden text-xs leading-5 text-slate-500 sm:block sm:text-sm sm:leading-6">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkGallery() {
  return (
    <section id="work" className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="PLUMBING CARE" title="작은 불편도 꼼꼼하게 살핍니다" description="배관과 설비의 상태에 따라 필요한 점검과 작업 방법을 안내합니다." />
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {workPhotos.map((photo) => (
            <figure key={photo.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={photo.image} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-[1.02]" />
              <figcaption className="flex items-center justify-between gap-2 px-4 py-4">
                <span className="text-sm font-extrabold text-slate-900">{photo.title}</span>
                <span className="text-[9px] text-slate-400">{photo.credit}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-slate-400">사진은 서비스 이해를 돕기 위한 참고 이미지입니다.</p>
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
        <Promises />
        <ProcessSection />
        <StrengthSection />
        <WorkGallery />
        <Reviews />
        <ContactFooter />
      </main>
      <MobileActionBar />
    </div>
  )
}
