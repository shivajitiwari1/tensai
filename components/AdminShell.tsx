'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const navItems = [
  { section: 'OVERVIEW' },
  { label: 'Dashboard', icon: '📊', href: '/admin/dashboard' },
  { section: 'SUBMISSIONS' },
  { label: 'Registrations', icon: '📝', href: '/admin/registrations', badgeKey: 'regs' },
  { label: 'Messages', icon: '✉️', href: '/admin/messages', badgeKey: 'msgs' },
  { section: 'SITE CONTENT' },
  { label: 'Announcements', icon: '📢', href: '/admin/site/announcements' },
  { label: 'Hero Slides', icon: '🖼️', href: '/admin/site/slides' },
  { label: 'Stats', icon: '📈', href: '/admin/site/stats' },
  { label: 'Highlights', icon: '⭐', href: '/admin/site/highlights' },
  { label: 'Courses', icon: '📚', href: '/admin/site/courses' },
  { label: 'Fee Structure', icon: '💰', href: '/admin/site/fees' },
  { label: 'Batch Timing', icon: '🕐', href: '/admin/site/batch-timing' },
  { label: 'Why Points', icon: '✅', href: '/admin/site/why-points' },
  { label: 'Contact Info', icon: '📍', href: '/admin/site/contact' },
]

interface AdminShellProps {
  children: React.ReactNode
  title: string
}

export default function AdminShell({ children, title }: AdminShellProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [badges, setBadges] = useState({ regs: 0, msgs: 0 })
  const [loggingOut, setLoggingOut] = useState(false)

  // Close sidebar on route change
  useEffect(() => { setSidebarOpen(false) }, [pathname])

  // Lock body scroll when sidebar open on mobile
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/registrations').then(r => r.json()).catch(() => []),
      fetch('/api/admin/messages').then(r => r.json()).catch(() => []),
    ]).then(([regs, msgs]) => {
      setBadges({
        regs: Array.isArray(regs) ? regs.filter((r: { status: string }) => r.status === 'pending').length : 0,
        msgs: Array.isArray(msgs) ? msgs.filter((m: { read: boolean }) => !m.read).length : 0,
      })
    })
  }, [pathname])

  const handleLogout = async () => {
    setLoggingOut(true)
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <div className="admin-body">
      <div className="admin-shell">

        {/* Dark overlay — tap to close sidebar on mobile */}
        {sidebarOpen && (
          <div
            className="admin-sidebar-overlay open"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <aside className={`admin-sidebar${sidebarOpen ? ' open' : ''}`}>
          {/* Logo row + close button */}
          <div className="admin-sidebar-logo">
            <img
              src="/images/logo.jpg"
              alt="Tensai"
            />
            <div style={{ flex: 1 }}>
              <strong>TIJL Admin</strong>
              <span>Control Panel</span>
            </div>
            {/* Close button — visible only on mobile */}
            <button
              className="admin-sidebar-close"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="admin-nav">
            {navItems.map((item, i) => {
              if ('section' in item && !('href' in item)) {
                return <div key={i} className="admin-nav-section">{item.section}</div>
              }
              if (!('href' in item)) return null
              const isActive = pathname === item.href
              const badgeCount =
                item.badgeKey === 'regs' ? badges.regs :
                item.badgeKey === 'msgs' ? badges.msgs : 0
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`admin-nav-link${isActive ? ' active' : ''}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                  {badgeCount > 0 && (
                    <span className="admin-nav-badge">{badgeCount}</span>
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="admin-sidebar-footer">
            <Link href="/" className="admin-nav-link" target="_blank" rel="noreferrer">
              <span className="nav-icon">🌐</span> View Website
            </Link>
            <button
              className="admin-logout-btn"
              onClick={handleLogout}
              disabled={loggingOut}
            >
              <span className="nav-icon">🚪</span>
              {loggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </aside>

        {/* Main content area */}
        <div className="admin-main">
          {/* Top bar */}
          <div className="admin-topbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                className="admin-hamburger"
                onClick={() => setSidebarOpen(o => !o)}
                aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={sidebarOpen}
              >
                <span /><span /><span />
              </button>
              <h1>{title}</h1>
            </div>
            <div className="admin-topbar-right">
              <div className="admin-user-badge">
                <div className="avatar">A</div>
                <span className="admin-user-name">Administrator</span>
              </div>
            </div>
          </div>

          <div className="admin-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
