'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'

interface Message {
  id: string; name: string; email: string; phone: string;
  subject: string; message: string; read: boolean; createdAt: string;
}

export default function MessagesPage() {
  const { checking } = useAdminAuth()
  const [msgs, setMsgs] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Message | null>(null)

  const fetchData = () => {
    fetch('/api/admin/messages').then(r => r.json()).then(d => {
      setMsgs(Array.isArray(d) ? d : [])
      setLoading(false)
    }).catch(() => setLoading(false))
  }

  useEffect(() => { if (!checking) fetchData() }, [checking])

  const markRead = async (id: string, read: boolean) => {
    await fetch('/api/admin/messages', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, read }),
    })
    fetchData()
    if (selected?.id === id) setSelected(s => s ? { ...s, read } : null)
  }

  const deleteMsg = async (id: string) => {
    if (!confirm('Delete this message?')) return
    await fetch('/api/admin/messages', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setSelected(null)
    fetchData()
  }

  const openMsg = (m: Message) => {
    setSelected(m)
    if (!m.read) markRead(m.id, true)
  }

  const fmt = (d: string) => new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  const filtered = msgs
    .filter(m => filter === 'all' || (filter === 'unread' ? !m.read : m.read))
    .filter(m => {
      const q = search.toLowerCase()
      return !q || `${m.name} ${m.email} ${m.subject} ${m.message}`.toLowerCase().includes(q)
    })

  if (checking) return null

  return (
    <AdminShell title="Messages">
      <div className="admin-page-header">
        <div>
          <h2>Contact Messages</h2>
          <p>{msgs.length} total • {msgs.filter(m => !m.read).length} unread</p>
        </div>
      </div>

      <div className="admin-search">
        <input
          placeholder="Search by name, email, subject, message..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All Messages</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
      </div>

      <div className="admin-card">
        {loading ? (
          <div className="admin-empty"><div className="empty-icon">⏳</div><h3>Loading...</h3></div>
        ) : filtered.length === 0 ? (
          <div className="admin-empty">
            <div className="empty-icon">✉️</div>
            <h3>No messages found</h3>
            <p>{search ? 'Try a different search.' : 'No messages yet.'}</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>From</th>
                  <th>Subject</th>
                  <th>Preview</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(m => (
                  <tr key={m.id} style={{ fontWeight: m.read ? 400 : 600 }}>
                    <td>
                      <button onClick={() => openMsg(m)} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                        <strong style={{ display: 'block', color: m.read ? '#1a1a1a' : '#C0392B' }}>{m.name}</strong>
                        <span style={{ fontSize: 12, color: '#7a7a7a', fontWeight: 400 }}>{m.email}</span>
                      </button>
                    </td>
                    <td style={{ fontSize: 13 }}>{m.subject || '(No subject)'}</td>
                    <td style={{ fontSize: 13, color: '#7a7a7a', maxWidth: 200, fontWeight: 400 }}>
                      {m.message.slice(0, 60)}{m.message.length > 60 ? '...' : ''}
                    </td>
                    <td style={{ fontSize: 12, color: '#7a7a7a', whiteSpace: 'nowrap' }}>{fmt(m.createdAt)}</td>
                    <td><span className={`badge badge-${m.read ? 'read' : 'unread'}`}>{m.read ? 'Read' : 'Unread'}</span></td>
                    <td>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => openMsg(m)}>👁 View</button>
                        <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => deleteMsg(m.id)}>🗑</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Message Detail Modal */}
      {selected && (
        <div className="admin-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{selected.subject || '(No subject)'}</h3>
              <button className="admin-modal-close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="admin-modal-body">
              {[
                ['From', selected.name],
                ['Email', selected.email],
                ['Phone', selected.phone || '—'],
                ['Received', fmt(selected.createdAt)],
              ].map(([l, v]) => (
                <div key={l} className="detail-row">
                  <span className="detail-label">{l}</span>
                  <span className="detail-value">{v}</span>
                </div>
              ))}
              <div style={{ background: '#f8f9fa', borderRadius: 10, padding: 16, marginTop: 16, fontSize: 15, lineHeight: 1.7, color: '#1a1a1a' }}>
                {selected.message}
              </div>
            </div>
            <div className="admin-modal-footer">
              <a href={`mailto:${selected.email}?subject=Re: ${selected.subject || 'Your enquiry'}`} className="admin-btn admin-btn-primary">
                ↩ Reply via Email
              </a>
              {selected.read ? (
                <button className="admin-btn admin-btn-secondary" onClick={() => markRead(selected.id, false)}>Mark Unread</button>
              ) : (
                <button className="admin-btn admin-btn-secondary" onClick={() => markRead(selected.id, true)}>Mark Read</button>
              )}
              <button className="admin-btn admin-btn-danger" onClick={() => deleteMsg(selected.id)}>🗑 Delete</button>
              <button className="admin-btn admin-btn-secondary" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  )
}
