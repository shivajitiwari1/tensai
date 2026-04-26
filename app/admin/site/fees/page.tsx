'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'

interface Fee { title: string; level: string; price: string; duration: string; popular: boolean; features: string[] }

export default function FeesEditorPage() {
  const { checking } = useAdminAuth()
  const [items, setItems] = useState<Fee[]>([])
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  useEffect(() => {
    if (checking) return
    fetch('/api/admin/site?section=fees').then(r => r.json()).then(setItems)
  }, [checking])

  const update = (i: number, field: string, val: string | boolean) =>
    setItems(s => s.map((item, idx) => idx === i ? { ...item, [field]: val } : item))

  const updateFeature = (i: number, j: number, val: string) =>
    setItems(s => s.map((item, idx) => idx === i ? { ...item, features: item.features.map((f, fi) => fi === j ? val : f) } : item))

  const addFeature = (i: number) =>
    setItems(s => s.map((item, idx) => idx === i ? { ...item, features: [...item.features, ''] } : item))

  const removeFeature = (i: number, j: number) =>
    setItems(s => s.map((item, idx) => idx === i ? { ...item, features: item.features.filter((_, fi) => fi !== j) } : item))

  const save = async () => {
    setStatus('saving')
    const res = await fetch('/api/admin/site?section=fees', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(items),
    })
    setStatus(res.ok ? 'saved' : 'error')
    setTimeout(() => setStatus('idle'), 3000)
  }

  if (checking) return null

  return (
    <AdminShell title="Edit Fee Structure">
      <div className="admin-page-header">
        <div><h2>Fee Structure</h2><p>Course pricing cards shown on the Fees page.</p></div>
      </div>

      <div className="admin-card">
        <div className="admin-card-body">
          {items.map((item, i) => (
            <div key={i} className="array-item">
              <div className="array-item-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="array-item-num">{i + 1}</span>
                  <strong style={{ fontSize: 14 }}>{item.title || 'Course'}</strong>
                  {item.popular && <span style={{ background: '#C0392B', color: '#fff', fontSize: 11, padding: '2px 8px', borderRadius: 10 }}>Popular</span>}
                </div>
                <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => setItems(s => s.filter((_, idx) => idx !== i))}>🗑</button>
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Course Title</label>
                  <input value={item.title} onChange={e => update(i, 'title', e.target.value)} />
                </div>
                <div className="admin-form-group">
                  <label>Level Label</label>
                  <input value={item.level} onChange={e => update(i, 'level', e.target.value)} placeholder="e.g. Conversational / N5" />
                </div>
              </div>
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Price</label>
                  <input value={item.price} onChange={e => update(i, 'price', e.target.value)} placeholder="₹6,000" />
                </div>
                <div className="admin-form-group">
                  <label>Duration</label>
                  <input value={item.duration} onChange={e => update(i, 'duration', e.target.value)} placeholder="3–4 months" />
                </div>
              </div>
              <div className="admin-form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                  <input type="checkbox" checked={item.popular} onChange={e => update(i, 'popular', e.target.checked)} style={{ width: 'auto' }} />
                  Mark as Most Popular
                </label>
              </div>

              <div className="admin-form-group">
                <label>Features / Inclusions</label>
                {item.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <input value={f} onChange={e => updateFeature(i, j, e.target.value)} placeholder={`Feature ${j + 1}`} />
                    <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => removeFeature(i, j)}>✕</button>
                  </div>
                ))}
                <button className="add-item-btn" style={{ marginTop: 4 }} onClick={() => addFeature(i)}>＋ Add Feature</button>
              </div>
            </div>
          ))}
          <button className="add-item-btn" onClick={() => setItems(s => [...s, { title: '', level: '', price: '', duration: '', popular: false, features: [] }])}>
            ＋ Add Fee Tier
          </button>
        </div>
      </div>

      <div className="admin-save-bar">
        <p className={status === 'saved' ? 'save-success' : status === 'error' ? 'save-error' : ''}>
          {status === 'saved' ? '✓ Fee structure saved!' : status === 'error' ? '✗ Error saving.' : ''}
        </p>
        <button className="admin-btn admin-btn-primary" onClick={save} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving...' : '💾 Save Changes'}
        </button>
      </div>
    </AdminShell>
  )
}
