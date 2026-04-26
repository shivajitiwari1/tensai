'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'

interface BatchRow { description: string; batch1: string; batch2: string; batch3: string }

export default function BatchTimingEditorPage() {
  const { checking } = useAdminAuth()
  const [items, setItems] = useState<BatchRow[]>([])
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  useEffect(() => {
    if (checking) return
    fetch('/api/admin/site?section=batchTimings').then(r => r.json()).then(setItems)
  }, [checking])

  const update = (i: number, field: keyof BatchRow, val: string) =>
    setItems(s => s.map((item, idx) => idx === i ? { ...item, [field]: val } : item))

  const save = async () => {
    setStatus('saving')
    const res = await fetch('/api/admin/site?section=batchTimings', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(items),
    })
    setStatus(res.ok ? 'saved' : 'error')
    setTimeout(() => setStatus('idle'), 3000)
  }

  if (checking) return null

  return (
    <AdminShell title="Edit Batch Timing">
      <div className="admin-page-header">
        <div><h2>Batch Timing</h2><p>Schedule table shown on the Batch Timing page.</p></div>
      </div>

      <div className="admin-card">
        <div className="admin-card-body">
          {items.map((row, i) => (
            <div key={i} className="array-item">
              <div className="array-item-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="array-item-num">{i + 1}</span>
                  <strong style={{ fontSize: 14 }}>{row.description}</strong>
                </div>
                <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => setItems(s => s.filter((_, idx) => idx !== i))}>🗑</button>
              </div>
              <div className="admin-form-group">
                <label>Row Description (left column)</label>
                <input value={row.description} onChange={e => update(i, 'description', e.target.value)} placeholder="e.g. Weekday Timing" />
              </div>
              <div className="admin-form-row" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                <div className="admin-form-group"><label>Batch I</label><input value={row.batch1} onChange={e => update(i, 'batch1', e.target.value)} /></div>
                <div className="admin-form-group"><label>Batch II</label><input value={row.batch2} onChange={e => update(i, 'batch2', e.target.value)} /></div>
                <div className="admin-form-group"><label>Batch III</label><input value={row.batch3} onChange={e => update(i, 'batch3', e.target.value)} /></div>
              </div>
            </div>
          ))}
          <button className="add-item-btn" onClick={() => setItems(s => [...s, { description: '', batch1: '', batch2: '', batch3: '—' }])}>
            ＋ Add Row
          </button>
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
