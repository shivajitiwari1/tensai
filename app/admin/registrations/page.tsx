'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'

interface Registration {
  id: string; firstName: string; lastName: string; email: string; phone: string;
  whatsapp: string; dob: string; gender: string; city: string; address: string;
  courseLevel: string; batchType: string; howHeard: string; message: string;
  status: string; createdAt: string;
}

export default function RegistrationsPage() {
  const { checking } = useAdminAuth()
  const [regs, setRegs] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Registration | null>(null)
  const [saving, setSaving] = useState('')

  const fetchData = () => {
    fetch('/api/admin/registrations').then(r => r.json()).then(d => {
      setRegs(Array.isArray(d) ? d : [])
      setLoading(false)
    }).catch(() => setLoading(false))
  }

  useEffect(() => { if (!checking) fetchData() }, [checking])

  const updateStatus = async (id: string, status: string) => {
    setSaving(id)
    await fetch('/api/admin/registrations', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    setSaving('')
    fetchData()
    if (selected?.id === id) setSelected(s => s ? { ...s, status } : null)
  }

  const deleteReg = async (id: string) => {
    if (!confirm('Delete this registration?')) return
    await fetch('/api/admin/registrations', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setSelected(null)
    fetchData()
  }

  const fmt = (d: string) => new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  const filtered = regs
    .filter(r => filter === 'all' || r.status === filter)
    .filter(r => {
      const q = search.toLowerCase()
      return !q || `${r.firstName} ${r.lastName} ${r.email} ${r.phone} ${r.courseLevel}`.toLowerCase().includes(q)
    })

  if (checking) return null

  return (
    <AdminShell title="Registrations">
      <div className="admin-page-header">
        <div>
          <h2>Student Registrations</h2>
          <p>{regs.length} total • {regs.filter(r => r.status === 'pending').length} pending</p>
        </div>
      </div>

      {/* Filters */}
      <div className="admin-search">
        <input
          placeholder="Search by name, email, phone, course..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <div className="admin-card">
        {loading ? (
          <div className="admin-empty"><div className="empty-icon">⏳</div><h3>Loading...</h3></div>
        ) : filtered.length === 0 ? (
          <div className="admin-empty">
            <div className="empty-icon">📝</div>
            <h3>No registrations found</h3>
            <p>{search ? 'Try a different search.' : 'No registrations yet.'}</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Course</th>
                  <th>Batch</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(r => (
                  <tr key={r.id}>
                    <td>
                      <button
                        onClick={() => setSelected(r)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        <strong style={{ display: 'block', color: '#C0392B' }}>{r.firstName} {r.lastName}</strong>
                        <span style={{ fontSize: 12, color: '#7a7a7a' }}>{r.email}</span>
                        <span style={{ fontSize: 12, color: '#7a7a7a', display: 'block' }}>{r.phone}</span>
                      </button>
                    </td>
                    <td style={{ fontSize: 13 }}>{r.courseLevel}</td>
                    <td style={{ fontSize: 12, color: '#7a7a7a' }}>{r.batchType || '—'}</td>
                    <td style={{ fontSize: 12, color: '#7a7a7a', whiteSpace: 'nowrap' }}>{fmt(r.createdAt)}</td>
                    <td><span className={`badge badge-${r.status}`}>{r.status}</span></td>
                    <td>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {r.status !== 'confirmed' && (
                          <button className="admin-btn admin-btn-success admin-btn-sm" onClick={() => updateStatus(r.id, 'confirmed')} disabled={saving === r.id}>
                            ✓ Confirm
                          </button>
                        )}
                        {r.status !== 'cancelled' && (
                          <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => updateStatus(r.id, 'cancelled')} disabled={saving === r.id}>
                            ✗ Cancel
                          </button>
                        )}
                        {r.status !== 'pending' && (
                          <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => updateStatus(r.id, 'pending')} disabled={saving === r.id}>
                            ↩ Pending
                          </button>
                        )}
                        <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => deleteReg(r.id)}>
                          🗑
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="admin-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{selected.firstName} {selected.lastName}</h3>
              <button className="admin-modal-close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="admin-modal-body">
              <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                <span className={`badge badge-${selected.status}`} style={{ fontSize: 13, padding: '5px 14px' }}>{selected.status}</span>
              </div>
              {[
                ['Full Name', `${selected.firstName} ${selected.lastName}`],
                ['Email', selected.email],
                ['Phone', selected.phone],
                ['WhatsApp', selected.whatsapp || '—'],
                ['Date of Birth', selected.dob || '—'],
                ['Gender', selected.gender || '—'],
                ['City', selected.city || '—'],
                ['Address', selected.address || '—'],
                ['Course / Level', selected.courseLevel],
                ['Preferred Batch', selected.batchType || '—'],
                ['How Heard', selected.howHeard || '—'],
                ['Registered On', fmt(selected.createdAt)],
              ].map(([l, v]) => (
                <div key={l} className="detail-row">
                  <span className="detail-label">{l}</span>
                  <span className="detail-value">{v}</span>
                </div>
              ))}
              {selected.message && (
                <div className="detail-row">
                  <span className="detail-label">Message</span>
                  <span className="detail-value" style={{ fontStyle: 'italic', color: '#7a7a7a' }}>&ldquo;{selected.message}&rdquo;</span>
                </div>
              )}
            </div>
            <div className="admin-modal-footer">
              {selected.status !== 'confirmed' && (
                <button className="admin-btn admin-btn-success" onClick={() => updateStatus(selected.id, 'confirmed')}>✓ Confirm</button>
              )}
              {selected.status !== 'cancelled' && (
                <button className="admin-btn admin-btn-danger" onClick={() => updateStatus(selected.id, 'cancelled')}>✗ Cancel</button>
              )}
              <button className="admin-btn admin-btn-secondary" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  )
}
