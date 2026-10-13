import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Droplets,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PhoneCall,
  ShieldCheck,
  Star,
  X,
} from 'lucide-react'
import { useState } from 'react'
import {
  badges,
  companyInfo,
  process,
  promises,
  reviews,
  services,
  strengths,
} from './data/siteData'

const kakaoLink = 'https://pf.kakao.com/'

const galleryItems = [
  {
    category: '배수구 막힘',
    title: '막힌 욕실 배수구 정비',
    image:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85',
    alt: '깔끔하고 현대적인 욕실 배수 공간',
  },
  {
    category: '누수 점검',
    title: '배관 누수 원인 확인',
    image:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=85',
    alt: '설비 기술자가 배관 설비를 점검하는 모습',
  },
  {
    category: '수전 교체',
    title: '주방 수전 교체 작업',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    alt: '정돈된 주방과 싱크대 공간',
  },
]

function CallLink({ children, className = '', ...props }) {
  return (
    <a href={companyInfo.telLink} className={className} {...props}>
      {children}
    </a>
  )
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['서비스', '#services'],
    ['작업과정', '#process'],
    ['작업사례', '#gallery'],
    ['고객후기', '#reviews'],
  ]

  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#home" aria-label="해냄설비 홈">
          <span className="brand-mark"><Droplets size={22} strokeWidth={2.5} /></span>
          <span>{companyInfo.name}<small>배관케어 전문</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'mobile-nav-open' : ''}`} aria-label="주요 메뉴">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <CallLink className="header-call mobile-header-call"><Phone size={17} /> 전화 상담</CallLink>
        </nav>
        <CallLink className="header-call desktop-header-call"><Phone size={17} /> 전화 상담 <b>{companyInfo.phone}</b></CallLink>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="hero-kicker"><span /> 서울·수도권 24시 긴급 출동</p>
          <h1><span className="hero-slogan-line">막힌 곳은 시원하게,</span><br /><em>견적은 투명하게.</em></h1>
          <p className="hero-description">
            갑작스러운 배관 문제, 원인부터 꼼꼼히 확인하고<br className="desktop-break" />
            필요한 작업만 정직하게 안내해드립니다.
          </p>
          <div className="hero-badges">
            {badges.map(({ label, icon: Icon }) => (
              <span className="hero-badge" key={label}><Icon size={15} />{label}</span>
            ))}
          </div>
          <div className="hero-actions">
            <CallLink className="button button-primary hero-call pulse"><PhoneCall size={19} /> 지금 전화 상담 <ArrowRight size={18} /></CallLink>
            <a className="button button-outline" href="#services">서비스 둘러보기 <ArrowDown size={17} /></a>
          </div>
          <p className="hero-footnote"><ShieldCheck size={15} /> 작업 전 비용 안내 · 미해결 시 비용 부담 없음</p>
        </div>
        <div className="hero-side-note"><span className="hero-side-line" /> 믿을 수 있는 우리 동네 설비 파트너</div>
      </div>
      <div className="hero-bottom container">
        <span>PLUMBING CARE, DONE RIGHT</span><span>01 / 06</span>
      </div>
    </section>
  )
}

function ServiceList() {
  return (
    <section className="section section-services" id="services">
      <div className="container">
        <SectionHeading eyebrow="OUR SERVICES" title={<>집 안의 배관 문제,<br className="mobile-break" /> 한 번에 해결하세요</>} description="막힘부터 누수까지, 현장에 맞는 방법으로 꼼꼼하게 작업합니다." />
        <div className="service-grid">
          {services.map(({ title, desc, icon: Icon }, index) => (
            <article className="service-card" key={title}>
              <div className="card-topline"><span>0{index + 1}</span><ArrowRight size={17} /></div>
              <div className="service-icon"><Icon size={27} strokeWidth={1.7} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#contact" aria-label={`${title} 상담하기`}>자세히 보기 <ChevronRight size={15} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TransparencyNotice() {
  return (
    <section className="notice-section">
      <div className="container notice-layout">
        <div className="notice-message">
          <div className="notice-icon"><ShieldCheck size={30} /></div>
          <p className="eyebrow">HONEST SERVICE PROMISE</p>
          <h2>불안한 추가 요금,<br />해냄설비에는 없습니다.</h2>
          <p className="notice-copy">작업 전 충분히 설명하고, 동의하신 범위 안에서만 작업합니다. 해결되지 않은 문제에 대해서는 비용을 청구하지 않습니다.</p>
          <CallLink className="text-link">부담 없이 먼저 상담하기 <ArrowRight size={16} /></CallLink>
        </div>
        <div className="promise-list">
          {promises.map(({ title, desc, icon: Icon }, index) => (
            <article className="promise-row" key={title}>
              <span className="promise-number">0{index + 1}</span>
              <span className="promise-icon"><Icon size={23} /></span>
              <div><h3>{title}</h3><p>{desc}</p></div>
              <Check className="promise-check" size={19} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkProcess() {
  return (
    <section className="section section-process" id="process">
      <div className="container">
        <SectionHeading eyebrow="HOW WE WORK" title="상담부터 마무리까지, 투명하게" description="어떤 작업을 하는지, 비용은 얼마인지 먼저 확인하실 수 있습니다." />
        <div className="process-grid">
          {process.map(({ step, title, desc, icon: Icon }, index) => (
            <article className="process-card" key={title}>
              <div className="process-top"><span>STEP 0{step}</span><Icon size={22} /></div>
              <div className="process-marker"><span>{String(step).padStart(2, '0')}</span>{index < process.length - 1 && <i />}</div>
              <h3>{title}</h3><p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureStrengths() {
  return (
    <section className="section section-strengths">
      <div className="container">
        <SectionHeading eyebrow="WHY HAENAEM" title="해냄설비를 선택하는 이유" description="작은 불편도 내 집처럼 살피고, 약속한 작업을 책임감 있게 마무리합니다." />
        <div className="strength-grid">
          {strengths.map(({ title, desc, icon: Icon }, index) => (
            <article className="strength-card" key={title}>
              <div className="strength-index">0{index + 1}</div>
              <div className="strength-icon"><Icon size={23} strokeWidth={1.8} /></div>
              <h3>{title}</h3><p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkGallery() {
  return (
    <section className="section section-gallery" id="gallery">
      <div className="container">
        <div className="gallery-heading-row">
          <SectionHeading eyebrow="RECENT WORK" title="꼼꼼한 작업의 기록" description="현장 상황에 따라 점검하고, 필요한 곳을 정확하게 작업합니다." />
          <span className="gallery-caption">작업 이미지 예시</span>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article className="gallery-card" key={item.title}>
              <div className="gallery-image-wrap">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="gallery-number">0{index + 1}</span>
                <span className="gallery-tag">{item.category}</span>
              </div>
              <div className="gallery-card-info"><h3>{item.title}</h3><span>현장 점검 · 맞춤 시공</span></div>
            </article>
          ))}
        </div>
        <p className="gallery-disclaimer">※ 이미지는 서비스 소개를 위한 참고 이미지입니다. 실제 작업 결과는 현장 상태에 따라 다를 수 있습니다.</p>
      </div>
    </section>
  )
}

function ReviewGrid() {
  return (
    <section className="section section-reviews" id="reviews">
      <div className="container">
        <SectionHeading eyebrow="CUSTOMER REVIEWS" title="고객님이 전해주신 이야기" description="작업 과정과 결과에 만족해주신 고객님의 후기입니다." />
        <div className="review-summary"><div className="review-stars">★★★★★</div><strong>고객님의 신뢰를 가장 소중히 생각합니다</strong><span>친절한 설명과 정직한 작업을 약속합니다</span></div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={`${review.name}-${review.service}`}>
              <div className="review-card-top"><div className="stars" aria-label={`${review.rating}점 만점 ${review.rating}점`}>{Array.from({ length: review.rating }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}</div><span className="review-service">{review.service}</span></div>
              <p className="review-text">“{review.text}”</p>
              <div className="review-author"><span className="author-avatar">{review.name.slice(0, 1)}</span><div><b>{review.name}</b><span><MapPin size={12} />{review.location}</span></div><BadgeCheck className="verified" size={18} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BottomCTA() {
  return (
    <section className="bottom-cta" id="contact">
      <div className="container cta-inner">
        <div className="cta-icon"><PhoneCall size={26} /></div>
        <div className="cta-copy"><p>지금 불편한 곳이 있으신가요?</p><h2>해냄설비가 빠르게 도와드릴게요.</h2><span>전화 주시면 증상부터 차근차근 상담해드립니다.</span></div>
        <CallLink className="button button-light"><Phone size={18} /> {companyInfo.phone} <ArrowRight size={17} /></CallLink>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand"><a className="brand brand-footer" href="#home"><span className="brand-mark"><Droplets size={22} /></span><span>{companyInfo.name}<small>배관케어 전문</small></span></a><p>정직한 설명과 꼼꼼한 시공으로<br />우리 집 설비를 안전하게 지켜드립니다.</p></div>
        <div className="footer-contact"><span>24시간 상담 예약</span><CallLink>{companyInfo.phone}</CallLink><small>서울·수도권 방문 상담</small></div>
        <div className="footer-links"><a href="#services">서비스</a><a href="#process">작업과정</a><a href="#gallery">작업사례</a><a href="#reviews">고객후기</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} 해냄설비. All rights reserved.</span><span>안전하고 정직한 배관케어</span></div>
    </footer>
  )
}

function MobileFloatingBar() {
  return (
    <div className="mobile-floating-bar">
      <CallLink className="floating-call pulse"><PhoneCall size={18} /><span>전화걸기<small>{companyInfo.phone}</small></span></CallLink>
      <a className="floating-kakao" href={kakaoLink} target="_blank" rel="noreferrer"><MessageCircle size={19} /><span>카카오톡 문의</span></a>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServiceList />
        <TransparencyNotice />
        <WorkProcess />
        <FeatureStrengths />
        <WorkGallery />
        <ReviewGrid />
        <BottomCTA />
      </main>
      <Footer />
      <MobileFloatingBar />
    </>
  )
}
