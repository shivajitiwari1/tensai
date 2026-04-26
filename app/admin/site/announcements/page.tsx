'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'

interface Announcement {
  id: string
  text: string
  link: string
  linkText: string
  active: boolean
  type: string
}

const TYPE_OPTIONS = [
  { value: 'batch',       label: '🎌 New Batch',      color: '#C0392B' },
  { value: 'exam',        label: '📝 Exam / JLPT',    color: '#1a5276' },
  { value: 'achievement', label: '🏆 Achievement',    color: '#1e8449' },
  { value: 'opportunity', label: '✈️ Opportunity',    color: '#7d3c98' },
  { value: 'placement',   label: '💼 Placement',      color: '#d4820a' },
]

const TYPE_ICONS: Record<string, string> = {
  batch: '🎌', exam: '📝', achievement: '🏆', opportunity: '✈️', placement: '💼',
}
const TYPE_COLORS: Record<string, string> = {
  batch: '#C0392B', exam: '#1a5276', achievement: '#1e8449', opportunity: '#7d3c98', placement: '#d4820a',
}

const emptyForm = (): Partial<Announcement> => ({
  text: '', link: '', linkText: 'Register Now', active: true, type: 'batch',
})

export default function AnnouncementsPage() {
  const { checking } = useAdminAuth()
  const [items, setItems] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<Partial<Announcement> | null>(null)
  const [isNew, setIsNew] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')
  const [previewIdx, setPreviewIdx] = useState(0)

  const fetchData = () => {
    fetch('/api/admin/announcements')
      .then(r => r.json())
      .then(d => { setItems(Array.isArray(d) ? d : []); setLoading(false) })
      .catch(() => setLoading(false))
  }

  useEffect(() => { if (!checking) fetchData() }, [checking])

  // Auto-rotate preview
  useEffect(() => {
    const active = items.filter(i => i.active)
    if (active.length < 2) return
    const t = setInterval(() => setPreviewIdx(p => (p + 1) % active.length), 2500)
    return () => clearInterval(t)
  }, [items])

  const msg = (m: string) => { setSaveMsg(m); setTimeout(() => setSaveMsg(''), 3000) }

  const toggleActive = async (item: Announcement) => {
    await fetch('/api/admin/announcements', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: item.id, active: !item.active }),
    })
    fetchData()
    msg(item.active ? '⏸ Announcement hidden from ticker' : '▶ Announcement now live on ticker')
  }

  const deleteItem = async (id: string) => {
    if (!confirm('Delete this announcement?')) return
    await fetch('/api/admin/announcements', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchData()
    msg('🗑 Deleted')
  }

  const openEdit = (item: Announcement) => { setEditing({ ...item }); setIsNew(false) }
  const openNew  = () => { setEditing(emptyForm()); setIsNew(true) }
  const closeEdit = () => setEditing(null)

  const saveEdit = async () => {
    if (!editing?.text?.trim()) return
    setSaving(true)
    if (isNew) {
      await fetch('/api/admin/announcements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      })
      msg('✓ New announcement added and is now live!')
    } else {
      await fetch('/api/admin/announcements', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      })
      msg('✓ Announcement updated!')
    }
    setSaving(false)
    setEditing(null)
    fetchData()
  }

  // Drag-to-reorder (simple up/down)
  const moveUp = async (i: number) => {
    if (i === 0) return
    const next = [...items]
    ;[next[i - 1], next[i]] = [next[i], next[i - 1]]
    setItems(next)
    await fetch('/api/admin/announcements', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(next),
    })
  }
  const moveDown = async (i: number) => {
    if (i === items.length - 1) return
    const next = [...items]
    ;[next[i], next[i + 1]] = [next[i + 1], next[i]]
    setItems(next)
    await fetch('/api/admin/announcements', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(next),
    })
  }

  if (checking) return null

  const activeItems = items.filter(i => i.active)
  const previewItem = activeItems[previewIdx % Math.max(activeItems.length, 1)]

  return (
    <AdminShell title="Announcements">
      <div className="admin-page-header">
        <div>
          <h2>News Ticker Announcements</h2>
          <p>{items.length} total • {activeItems.length} showing on website</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={openNew}>＋ Add Announcement</button>
      </div>

      {/* Live Preview */}
      {activeItems.length > 0 && (
        <div className="admin-card" style={{ marginBottom: 24 }}>
          <div className="admin-card-header">
            <h3>🔴 Live Preview — Ticker on Website</h3>
            <span style={{ fontSize: 12, color: '#7a7a7a' }}>Auto-rotating every 2.5s</span>
          </div>
          <div className="admin-card-body" style={{ padding: '12px 24px 16px' }}>
            <div style={{
              background: '#1a1a1a', borderRadius: 8, height: 40,
              display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative',
            }}>
              {/* Label */}
              <div style={{
                background: previewItem ? TYPE_COLORS[previewItem.type] || '#C0392B' : '#C0392B',
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '0 20px 0 14px', height: '100%',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)',
                fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', color: '#fff', flexShrink: 0,
              }}>
                📢 <span>NEWS</span>
              </div>
              {/* Text */}
              {previewItem && (
                <div style={{
                  flex: 1, padding: '0 12px', display: 'flex', alignItems: 'center',
                  gap: 8, fontSize: 13, color: 'rgba(255,255,255,.9)', overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}>
                  <span>{TYPE_ICONS[previewItem.type] || '📌'}</span>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{previewItem.text}</span>
                  {previewItem.link && (
                    <span style={{
                      background: 'rgba(255,255,255,.12)', color: '#ffe8a0',
                      fontSize: 11, fontWeight: 600, padding: '2px 10px',
                      borderRadius: 20, flexShrink: 0, border: '1px solid rgba(255,255,255,.15)',
                    }}>
                      {previewItem.linkText} →
                    </span>
                  )}
                </div>
              )}
              {/* Dots */}
              <div style={{ display: 'flex', gap: 5, padding: '0 12px', flexShrink: 0 }}>
                {activeItems.map((_, i) => (
                  <div key={i} style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: i === previewIdx % activeItems.length
                      ? (TYPE_COLORS[activeItems[i].type] || '#C0392B')
                      : 'rgba(255,255,255,.3)',
                  }} />
                ))}
              </div>
              {/* Progress bar */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,.1)' }}>
                <div key={previewIdx} style={{
                  height: '100%',
                  background: previewItem ? TYPE_COLORS[previewItem.type] + '80' : 'rgba(255,255,255,.4)',
                  animation: 'ticker-fill 2.5s linear forwards',
                }} />
              </div>
            </div>
            <p style={{ fontSize: 12, color: '#7a7a7a', marginTop: 8 }}>
              ↑ This is exactly how the ticker appears on your website. Hover to pause, click dots/arrows to navigate.
            </p>
          </div>
        </div>
      )}

      {/* Announcements Table */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>All Announcements</h3>
          {saveMsg && (
            <span style={{
              fontSize: 13, fontWeight: 600,
              color: saveMsg.includes('🗑') || saveMsg.includes('⏸') ? '#922b21' : '#1e8449',
            }}>{saveMsg}</span>
          )}
        </div>

        {loading ? (
          <div className="admin-empty"><div className="empty-icon">⏳</div><h3>Loading...</h3></div>
        ) : items.length === 0 ? (
          <div className="admin-empty">
            <div className="empty-icon">📢</div>
            <h3>No announcements yet</h3>
            <p>Add your first announcement to show it in the news ticker.</p>
            <button className="admin-btn admin-btn-primary" style={{ marginTop: 16 }} onClick={openNew}>＋ Add First Announcement</button>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: 60 }}>Order</th>
                  <th>Announcement</th>
                  <th style={{ width: 100 }}>Type</th>
                  <th style={{ width: 80 }}>Status</th>
                  <th style={{ width: 160 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => {
                  const color = TYPE_COLORS[item.type] || '#C0392B'
                  const icon  = TYPE_ICONS[item.type]  || '📌'
                  return (
                    <tr key={item.id} style={{ opacity: item.active ? 1 : 0.5 }}>
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <button
                            className="admin-btn admin-btn-secondary admin-btn-sm"
                            onClick={() => moveUp(i)}
                            disabled={i === 0}
                            style={{ padding: '3px 8px', fontSize: 11 }}
                          >▲</button>
                          <button
                            className="admin-btn admin-btn-secondary admin-btn-sm"
                            onClick={() => moveDown(i)}
                            disabled={i === items.length - 1}
                            style={{ padding: '3px 8px', fontSize: 11 }}
                          >▼</button>
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <div style={{
                            width: 28, height: 28, borderRadius: 6, background: color + '20',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 14, flexShrink: 0,
                          }}>{icon}</div>
                          <div>
                            <div style={{ fontSize: 14, color: '#1a1a1a', fontWeight: item.active ? 600 : 400, marginBottom: 2 }}>
                              {item.text}
                            </div>
                            {item.link && (
                              <div style={{ fontSize: 12, color: '#7a7a7a' }}>
                                🔗 {item.link} → <strong>{item.linkText}</strong>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        <span style={{
                          display: 'ruby-base', padding: '3px 10px', borderRadius: 20,
                          fontSize: 12, fontWeight: 600, background: color + '18', color,
                        }}>
                          {TYPE_OPTIONS.find(t => t.value === item.type)?.label || item.type}
                        </span>
                      </td>
                      <td>
                        <button
                          onClick={() => toggleActive(item)}
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 5,
                            padding: '4px 10px', borderRadius: 20, border: 'none', cursor: 'pointer',
                            fontSize: 12, fontWeight: 600,
                            background: item.active ? '#EAFAF1' : '#f0f0f0',
                            color: item.active ? '#1e8449' : '#7a7a7a',
                          }}
                        >
                          <span style={{ width: 7, height: 7, borderRadius: '50%', background: item.active ? '#1e8449' : '#bbb', display: 'inline-block' }} />
                          {item.active ? 'Live' : 'Hidden'}
                        </button>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: 6 }}>
                          <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => openEdit(item)}>✏️ Edit</button>
                          <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => deleteItem(item.id)}>🗑</button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Type legend */}
      <div className="admin-card">
        <div className="admin-card-header"><h3>Announcement Types</h3></div>
        <div className="admin-card-body">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {TYPE_OPTIONS.map(t => (
              <div key={t.value} style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px',
                borderRadius: 8, background: t.color + '12', border: `1px solid ${t.color}30`,
              }}>
                <span style={{ fontSize: 16 }}>{t.label.split(' ')[0]}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: t.color }}>{t.label.slice(2)}</span>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.color }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit / New Modal */}
      {editing !== null && (
        <div className="admin-modal-backdrop" onClick={closeEdit}>
          <div className="admin-modal" style={{ maxWidth: 560 }} onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{isNew ? '＋ New Announcement' : '✏️ Edit Announcement'}</h3>
              <button className="admin-modal-close" onClick={closeEdit}>✕</button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-form-group">
                <label>Type *</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
                  {TYPE_OPTIONS.map(t => (
                    <button
                      key={t.value}
                      onClick={() => setEditing(e => ({ ...e, type: t.value }))}
                      style={{
                        padding: '6px 14px', borderRadius: 20, border: `2px solid`,
                        borderColor: editing.type === t.value ? t.color : '#e5e7eb',
                        background: editing.type === t.value ? t.color + '15' : '#fff',
                        color: editing.type === t.value ? t.color : '#4a4a4a',
                        fontWeight: 600, fontSize: 13, cursor: 'pointer',
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="admin-form-group">
                <label>Announcement Text *</label>
                <textarea
                  value={editing.text || ''}
                  onChange={e => setEditing(ed => ({ ...ed, text: e.target.value }))}
                  placeholder="e.g. 🎌 New Batch Starting — Japanese N5 Level from 1st May"
                  style={{ minHeight: 80 }}
                />
                <div style={{ fontSize: 12, color: '#7a7a7a', marginTop: 4 }}>
                  {(editing.text || '').length} characters — keep under 120 for best display
                </div>
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Link URL (optional)</label>
                  <input
                    value={editing.link || ''}
                    onChange={e => setEditing(ed => ({ ...ed, link: e.target.value }))}
                    placeholder="/registration"
                  />
                </div>
                <div className="admin-form-group">
                  <label>Button Text</label>
                  <input
                    value={editing.linkText || ''}
                    onChange={e => setEditing(ed => ({ ...ed, linkText: e.target.value }))}
                    placeholder="Register Now"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={editing.active !== false}
                    onChange={e => setEditing(ed => ({ ...ed, active: e.target.checked }))}
                    style={{ width: 'auto', accentColor: '#C0392B' }}
                  />
                  <span>Show on ticker immediately after saving</span>
                </label>
              </div>

              {/* Mini preview */}
              {editing.text && (
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#4a4a4a', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '.4px' }}>Preview</div>
                  <div style={{
                    background: '#1a1a1a', borderRadius: 6, height: 36,
                    display: 'flex', alignItems: 'center', overflow: 'hidden',
                  }}>
                    <div style={{
                      background: TYPE_COLORS[editing.type || 'batch'] || '#C0392B',
                      padding: '0 18px 0 12px', height: '100%', display: 'flex', alignItems: 'center',
                      gap: 5, fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0,
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)',
                    }}>
                      📢 NEWS
                    </div>
                    <div style={{ flex: 1, padding: '0 10px', fontSize: 12, color: 'rgba(255,255,255,.9)', display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden', whiteSpace: 'nowrap' }}>
                      <span>{TYPE_ICONS[editing.type || 'batch']}</span>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{editing.text}</span>
                      {editing.link && (
                        <span style={{ background: 'rgba(255,255,255,.15)', color: '#ffe8a0', fontSize: 10, padding: '2px 8px', borderRadius: 12, flexShrink: 0 }}>
                          {editing.linkText || 'Read More'} →
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="admin-modal-footer">
              <button className="admin-btn admin-btn-primary" onClick={saveEdit} disabled={saving || !editing.text?.trim()}>
                {saving ? 'Saving...' : isNew ? '＋ Add Announcement' : '💾 Save Changes'}
              </button>
              <button className="admin-btn admin-btn-secondary" onClick={closeEdit}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  )
}
