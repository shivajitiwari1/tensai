'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'
import Link from 'next/link'

interface Registration {
  id: string; firstName: string; lastName: string; email: string; phone: string;
  courseLevel: string; status: string; createdAt: string;
}
interface Message {
  id: string; name: string; email: string; subject: string; message: string;
  read: boolean; createdAt: string;
}

export default function DashboardPage() {
  const { checking } = useAdminAuth()
  const [regs, setRegs] = useState<Registration[]>([])
  const [msgs, setMsgs] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (checking) return
    Promise.all([
      fetch('/api/admin/registrations').then(r => r.json()).catch(() => []),
      fetch('/api/admin/messages').then(r => r.json()).catch(() => []),
    ]).then(([r, m]) => {
      setRegs(Array.isArray(r) ? r : [])
      setMsgs(Array.isArray(m) ? m : [])
      setLoading(false)
    })
  }, [checking])

  if (checking || loading) return (
    <div className="admin-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', color: '#7a7a7a' }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
        <p>Loading...</p>
      </div>
    </div>
  )

  const pendingRegs = regs.filter(r => r.status === 'pending').length
  const unreadMsgs = msgs.filter(m => !m.read).length
  const confirmedRegs = regs.filter(r => r.status === 'confirmed').length

  const fmt = (d: string) => new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <AdminShell title="Dashboard">
      {/* Stats */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon red">📝</div>
          <div>
            <div className="admin-stat-num">{regs.length}</div>
            <div className="admin-stat-label">Total Registrations</div>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon orange">⏳</div>
          <div>
            <div className="admin-stat-num">{pendingRegs}</div>
            <div className="admin-stat-label">Pending</div>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon green">✅</div>
          <div>
            <div className="admin-stat-num">{confirmedRegs}</div>
            <div className="admin-stat-label">Confirmed</div>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon blue">✉️</div>
          <div>
            <div className="admin-stat-num">{unreadMsgs}</div>
            <div className="admin-stat-label">Unread Messages</div>
          </div>
        </div>
      </div>

      {/* Recent Registrations */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3>Recent Registrations</h3>
          </div>
          <Link href="/admin/registrations" className="admin-btn admin-btn-secondary admin-btn-sm">View All →</Link>
        </div>
        {regs.length === 0 ? (
          <div className="admin-empty">
            <div className="empty-icon">📝</div>
            <h3>No registrations yet</h3>
            <p>Student registrations will appear here.</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Course</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {regs.slice(0, 6).map(r => (
                  <tr key={r.id}>
                    <td>
                      <strong style={{ display: 'block' }}>{r.firstName} {r.lastName}</strong>
                      <span style={{ fontSize: 12, color: '#7a7a7a' }}>{r.email}</span>
                    </td>
                    <td style={{ fontSize: 13 }}>{r.courseLevel}</td>
                    <td style={{ fontSize: 13 }}>{r.phone}</td>
                    <td style={{ fontSize: 12, color: '#7a7a7a', whiteSpace: 'nowrap' }}>{fmt(r.createdAt)}</td>
                    <td><span className={`badge badge-${r.status}`}>{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Recent Messages */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3>Recent Messages</h3>
          </div>
          <Link href="/admin/messages" className="admin-btn admin-btn-secondary admin-btn-sm">View All →</Link>
        </div>
        {msgs.length === 0 ? (
          <div className="admin-empty">
            <div className="empty-icon">✉️</div>
            <h3>No messages yet</h3>
            <p>Contact form submissions will appear here.</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>From</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {msgs.slice(0, 5).map(m => (
                  <tr key={m.id}>
                    <td>
                      <strong style={{ display: 'block' }}>{m.name}</strong>
                      <span style={{ fontSize: 12, color: '#7a7a7a' }}>{m.email}</span>
                    </td>
                    <td style={{ fontSize: 13 }}>{m.subject || '(No subject)'}</td>
                    <td style={{ fontSize: 12, color: '#7a7a7a', whiteSpace: 'nowrap' }}>{fmt(m.createdAt)}</td>
                    <td><span className={`badge badge-${m.read ? 'read' : 'unread'}`}>{m.read ? 'Read' : 'Unread'}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="admin-card">
        <div className="admin-card-header"><h3>Quick Edit Site Content</h3></div>
        <div className="admin-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
            {[
              { label: '📢 Announcements', href: '/admin/site/announcements' },
              { label: '🖼️ Hero Slides', href: '/admin/site/slides' },
              { label: '📈 Stats', href: '/admin/site/stats' },
              { label: '⭐ Highlights', href: '/admin/site/highlights' },
              { label: '📚 Courses', href: '/admin/site/courses' },
              { label: '💰 Fee Structure', href: '/admin/site/fees' },
              { label: '🕐 Batch Timing', href: '/admin/site/batch-timing' },
              { label: '✅ Why Points', href: '/admin/site/why-points' },
              { label: '📍 Contact Info', href: '/admin/site/contact' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="admin-btn admin-btn-secondary" style={{ justifyContent: 'center', textAlign: 'center' }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  )
}
