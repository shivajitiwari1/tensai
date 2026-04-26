'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const courseLinks = [
  { label: 'Japanese Language', href: '/courses/japanese' },
  { label: 'JLPT Preparation', href: '/courses/jlpt' },
  { label: 'International Language', href: '/courses/international' },
  { label: 'Fee Structure', href: '/fees' },
  { label: 'Batch Timing', href: '/batch-timing' },
]

const serviceLinks = [
  { label: 'Career Placement', href: '/services/placement' },
  { label: 'Career Counselling', href: '/services/counselling' },
  { label: 'Extra Activities', href: '/services/activities' },
  { label: 'Study in Japan', href: '/services/study-japan' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => { setMobileOpen(false); setCoursesOpen(false); setServicesOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = () => { setMobileOpen(false); setCoursesOpen(false); setServicesOpen(false) }

  const isCoursesActive = pathname.startsWith('/courses') || pathname === '/fees' || pathname === '/batch-timing'
  const isServicesActive = pathname.startsWith('/services')

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="header-logo">
            <img
              src="https://tensai.org.in/wp-content/uploads/2019/04/cropped-Tensai-Logo-copy-2.jpg"
              alt="Tensai Japanese Language Institute"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="site-nav">
            <div className="nav-item">
              <Link href="/" className={`nav-link${pathname === '/' ? ' active' : ''}`}>Home</Link>
            </div>
            <div className="nav-item">
              <span className={`nav-span${isCoursesActive ? ' active' : ''}`}>Courses ▾</span>
              <div className="dropdown">
                {courseLinks.map(l => <Link key={l.href} href={l.href} className="dropdown-link">{l.label}</Link>)}
              </div>
            </div>
            <div className="nav-item">
              <span className={`nav-span${isServicesActive ? ' active' : ''}`}>Services ▾</span>
              <div className="dropdown">
                {serviceLinks.map(l => <Link key={l.href} href={l.href} className="dropdown-link">{l.label}</Link>)}
              </div>
            </div>
            <div className="nav-item">
              <Link href="/gallery" className={`nav-link${pathname === '/gallery' ? ' active' : ''}`}>Gallery</Link>
            </div>
            <div className="nav-item">
              <Link href="/about" className={`nav-link${pathname === '/about' ? ' active' : ''}`}>About Us</Link>
            </div>
            <div className="nav-item">
              <Link href="/contact" className={`nav-link${pathname === '/contact' ? ' active' : ''}`}>Contact</Link>
            </div>
            <Link href="/registration" className="nav-cta">Register Now</Link>
          </nav>

          {/* Hamburger — animates to ✕ when open */}
          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Dark overlay — tap anywhere to close */}
      {mobileOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>

        {/* ── Close button at top of drawer ── */}
        <div className="mobile-nav-header">
          <span className="mobile-nav-title">Menu</span>
          <button className="mobile-nav-close" onClick={close} aria-label="Close menu">
            ✕
          </button>
        </div>

        <div className="mobile-nav-item">
          <Link href="/">Home</Link>
        </div>

        {/* Courses accordion */}
        <div className="mobile-nav-item">
          <span
            onClick={() => setCoursesOpen(o => !o)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            Courses
            <span className="mobile-nav-chevron">{coursesOpen ? '▲' : '▼'}</span>
          </span>
          {coursesOpen && (
            <div className="mobile-nav-sub">
              {courseLinks.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
            </div>
          )}
        </div>

        {/* Services accordion */}
        <div className="mobile-nav-item">
          <span
            onClick={() => setServicesOpen(o => !o)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            Services
            <span className="mobile-nav-chevron">{servicesOpen ? '▲' : '▼'}</span>
          </span>
          {servicesOpen && (
            <div className="mobile-nav-sub">
              {serviceLinks.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
            </div>
          )}
        </div>

        <div className="mobile-nav-item"><Link href="/gallery">Gallery</Link></div>
        <div className="mobile-nav-item"><Link href="/about">About Us</Link></div>
        <div className="mobile-nav-item"><Link href="/contact">Contact</Link></div>

        <div className="mobile-nav-cta">
          <Link href="/registration">Register Now →</Link>
        </div>

        {/* Second close button at bottom for tall menus */}
        <div className="mobile-nav-close-bottom">
          <button onClick={close}>✕ Close Menu</button>
        </div>
      </div>

      <style>{`
        .dropdown-link { display: block; padding: 8px 14px; font-size: 13px; color: var(--ink-muted); text-decoration: none; border-radius: 6px; transition: background .12s; }
        .dropdown-link:hover { background: var(--red-light); color: var(--red); }
      `}</style>
    </>
  )
}
