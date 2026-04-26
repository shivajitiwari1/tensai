'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'

export default function WhyPointsEditorPage() {
  const { checking } = useAdminAuth()
  const [points, setPoints] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  useEffect(() => {
    if (checking) return
    fetch('/api/admin/site?section=whyPoints').then(r => r.json()).then(setPoints)
  }, [checking])

  const update = (i: number, val: string) =>
    setPoints(s => s.map((p, idx) => idx === i ? val : p))

  const save = async () => {
    setStatus('saving')
    const res = await fetch('/api/admin/site?section=whyPoints', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(points),
    })
    setStatus(res.ok ? 'saved' : 'error')
    setTimeout(() => setStatus('idle'), 3000)
  }

  if (checking) return null

  return (
    <AdminShell title="Edit Why Points">
      <div className="admin-page-header">
        <div><h2>Why Choose TIJL — Points</h2><p>Bullet points shown in the &ldquo;Why TIJL&rdquo; homepage section.</p></div>
      </div>

      <div className="admin-card">
        <div className="admin-card-body">
          {points.map((p, i) => (
            <div key={i} className="array-item">
              <div className="array-item-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="array-item-num">{i + 1}</span>
                </div>
                <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => setPoints(s => s.filter((_, idx) => idx !== i))}>🗑 Remove</button>
              </div>
              <div className="admin-form-group" style={{ marginBottom: 0 }}>
                <label>Point Text</label>
                <input value={p} onChange={e => update(i, e.target.value)} placeholder="Enter a reason to choose TIJL..." />
              </div>
            </div>
          ))}
          <button className="add-item-btn" onClick={() => setPoints(s => [...s, ''])}>＋ Add Point</button>
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
