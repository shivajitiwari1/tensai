'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'

interface Highlight { icon: string; title: string; desc: string; link: string }

export default function HighlightsEditorPage() {
  const { checking } = useAdminAuth()
  const [items, setItems] = useState<Highlight[]>([])
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  useEffect(() => {
    if (checking) return
    fetch('/api/admin/site?section=highlights').then(r => r.json()).then(setItems)
  }, [checking])

  const update = (i: number, field: keyof Highlight, val: string) =>
    setItems(s => s.map((item, idx) => idx === i ? { ...item, [field]: val } : item))

  const save = async () => {
    setStatus('saving')
    const res = await fetch('/api/admin/site?section=highlights', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(items),
    })
    setStatus(res.ok ? 'saved' : 'error')
    setTimeout(() => setStatus('idle'), 3000)
  }

  if (checking) return null

  return (
    <AdminShell title="Edit Highlights">
      <div className="admin-page-header">
        <div><h2>Homepage Highlights</h2><p>3 feature cards shown below the stats strip.</p></div>
      </div>

      <div className="admin-card">
        <div className="admin-card-body">
          {items.map((item, i) => (
            <div key={i} className="array-item">
              <div className="array-item-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="array-item-num">{i + 1}</span>
                  <span style={{ fontSize: 22 }}>{item.icon}</span>
                  <strong style={{ fontSize: 14 }}>{item.title}</strong>
                </div>
                <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => setItems(s => s.filter((_, idx) => idx !== i))}>🗑</button>
              </div>
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Icon (emoji)</label>
                  <input value={item.icon} onChange={e => update(i, 'icon', e.target.value)} placeholder="🎓" />
                </div>
                <div className="admin-form-group">
                  <label>Link (href)</label>
                  <input value={item.link} onChange={e => update(i, 'link', e.target.value)} placeholder="/about" />
                </div>
              </div>
              <div className="admin-form-group">
                <label>Title</label>
                <input value={item.title} onChange={e => update(i, 'title', e.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>Description</label>
                <textarea value={item.desc} onChange={e => update(i, 'desc', e.target.value)} />
              </div>
            </div>
          ))}
          <button className="add-item-btn" onClick={() => setItems(s => [...s, { icon: '⭐', title: '', desc: '', link: '/' }])}>＋ Add Highlight</button>
        </div>
      </div>

      <div className="admin-save-bar">
        <p className={status === 'saved' ? 'save-success' : status === 'error' ? 'save-error' : ''}>
          {status === 'saved' ? '✓ Saved!' : status === 'error' ? '✗ Error saving.' : ''}
        </p>
        <button className="admin-btn admin-btn-primary" onClick={save} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving...' : '💾 Save Changes'}
        </button>
      </div>
    </AdminShell>
  )
}
