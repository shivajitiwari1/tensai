'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'

interface Stat { num: string; sup: string; label: string }

export default function StatsEditorPage() {
  const { checking } = useAdminAuth()
  const [stats, setStats] = useState<Stat[]>([])
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  useEffect(() => {
    if (checking) return
    fetch('/api/admin/site?section=stats').then(r => r.json()).then(setStats)
  }, [checking])

  const update = (i: number, field: keyof Stat, val: string) => {
    setStats(s => s.map((item, idx) => idx === i ? { ...item, [field]: val } : item))
  }

  const addItem = () => setStats(s => [...s, { num: '0', sup: '+', label: 'New Stat' }])
  const removeItem = (i: number) => setStats(s => s.filter((_, idx) => idx !== i))

  const save = async () => {
    setStatus('saving')
    const res = await fetch('/api/admin/site?section=stats', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(stats),
    })
    setStatus(res.ok ? 'saved' : 'error')
    setTimeout(() => setStatus('idle'), 3000)
  }

  if (checking) return null

  return (
    <AdminShell title="Edit Stats">
      <div className="admin-page-header">
        <div><h2>Homepage Stats</h2><p>Stats shown in the red strip below the hero slider.</p></div>
      </div>

      <div className="admin-card">
        <div className="admin-card-body">
          {stats.map((s, i) => (
            <div key={i} className="array-item">
              <div className="array-item-header">
                <span className="array-item-num">{i + 1}</span>
                <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => removeItem(i)}>🗑 Remove</button>
              </div>
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Number</label>
                  <input value={s.num} onChange={e => update(i, 'num', e.target.value)} placeholder="e.g. 15" />
                </div>
                <div className="admin-form-group">
                  <label>Suffix (sup)</label>
                  <input value={s.sup} onChange={e => update(i, 'sup', e.target.value)} placeholder="e.g. + or %" />
                </div>
              </div>
              <div className="admin-form-group">
                <label>Label</label>
                <input value={s.label} onChange={e => update(i, 'label', e.target.value)} placeholder="e.g. Years of Excellence" />
              </div>
            </div>
          ))}
          <button className="add-item-btn" onClick={addItem}>＋ Add Stat</button>
        </div>
      </div>

      <div className="admin-save-bar">
        <p className={status === 'saved' ? 'save-success' : status === 'error' ? 'save-error' : ''}>
          {status === 'saved' ? '✓ Changes saved successfully!' : status === 'error' ? '✗ Error saving. Try again.' : 'Unsaved changes will be lost if you leave.'}
        </p>
        <button className="admin-btn admin-btn-primary" onClick={save} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving...' : '💾 Save Changes'}
        </button>
      </div>
    </AdminShell>
  )
}
