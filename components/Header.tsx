'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 200, boxShadow: '0 1px 8px rgba(0,0,0,.06)' }}>
      <div style={{ maxWidth: 1200, margin: 'auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72, gap: 16 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="https://tensai.org.in/wp-content/uploads/2019/04/cropped-Tensai-Logo-copy-2.jpg"
            alt="Tensai"
            style={{ height: 56, width: 'auto', borderRadius: 6 }}
          />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <NavLink href="/" pathname={pathname} label="Home" />

          <div className="nav-item">
            <span className={`nav-link-span ${pathname.startsWith('/courses') ? 'active' : ''}`}>
              Courses ▾
            </span>
            <div className="dropdown">
              <Link href="/courses/japanese" className="dropdown-link">Japanese Language</Link>
              <Link href="/courses/jlpt" className="dropdown-link">JLPT Preparation</Link>
              <Link href="/courses/international" className="dropdown-link">International Language</Link>
              <Link href="/fees" className="dropdown-link">Fee Structure</Link>
              <Link href="/batch-timing" className="dropdown-link">Batch Timing</Link>
            </div>
          </div>

          <div className="nav-item">
            <span className={`nav-link-span ${pathname.startsWith('/services') ? 'active' : ''}`}>
              Services ▾
            </span>
            <div className="dropdown">
              <Link href="/services/placement" className="dropdown-link">Career Placement</Link>
              <Link href="/services/counselling" className="dropdown-link">Career Counselling</Link>
              <Link href="/services/activities" className="dropdown-link">Extra Activities</Link>
              <Link href="/services/study-japan" className="dropdown-link">Study in Japan</Link>
            </div>
          </div>

          <NavLink href="/gallery" pathname={pathname} label="Gallery" />
          <NavLink href="/about" pathname={pathname} label="About Us" />
          <NavLink href="/contact" pathname={pathname} label="Contact" />

          <Link href="/registration" className="nav-cta">Register Now</Link>
        </nav>
      </div>

      <style>{`
        .nav-item { position: relative; }
        .nav-link-span {
          display: block; padding: 8px 13px; font-size: 13px; font-weight: 500;
          color: var(--ink); text-decoration: none; border-radius: 6px; cursor: pointer;
          transition: background .15s, color .15s; white-space: nowrap;
        }
        .nav-link-span:hover, .nav-link-span.active { background: var(--cream2); color: var(--red); }
        .nav-item:hover .dropdown { display: block; }
        .dropdown {
          display: none; position: absolute; top: 100%; left: 0; background: var(--white);
          border: 1px solid var(--border); border-radius: 10px; min-width: 200px; padding: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,.10); z-index: 300;
        }
        .dropdown-link { display: block; padding: 8px 14px; font-size: 13px; color: var(--ink-muted); text-decoration: none; border-radius: 6px; transition: background .12s; }
        .dropdown-link:hover { background: var(--red-light); color: var(--red); }
        .nav-cta { margin-left: 8px; background: var(--red); color: #fff !important; border-radius: 8px; padding: 9px 16px; font-weight: 600; font-size: 13px; text-decoration: none; cursor: pointer; white-space: nowrap; }
        .nav-cta:hover { background: var(--red-dark) !important; }
      `}</style>
    </header>
  )
}

function NavLink({ href, pathname, label }: { href: string; pathname: string; label: string }) {
  const isActive = pathname === href
  return (
    <div className="nav-item">
      <Link
        href={href}
        style={{
          display: 'block', padding: '8px 13px', fontSize: 13, fontWeight: 500,
          color: isActive ? 'var(--red)' : 'var(--ink)', textDecoration: 'none',
          borderRadius: 6, whiteSpace: 'nowrap',
          background: isActive ? 'var(--cream2)' : 'transparent',
        }}
      >
        {label}
      </Link>
    </div>
  )
}
