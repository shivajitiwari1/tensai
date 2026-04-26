'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'

interface Course { id: string; title: string; badge: string; desc: string; kanji: string; tag: string; href: string }

export default function CoursesEditorPage() {
  const { checking } = useAdminAuth()
  const [items, setItems] = useState<Course[]>([])
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  useEffect(() => {
    if (checking) return
    fetch('/api/admin/site?section=courses').then(r => r.json()).then(setItems)
  }, [checking])

  const update = (i: number, field: keyof Course, val: string) =>
    setItems(s => s.map((item, idx) => idx === i ? { ...item, [field]: val } : item))

  const save = async () => {
    setStatus('saving')
    const res = await fetch('/api/admin/site?section=courses', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(items),
    })
    setStatus(res.ok ? 'saved' : 'error')
    setTimeout(() => setStatus('idle'), 3000)
  }

  if (checking) return null

  return (
    <AdminShell title="Edit Courses">
      <div className="admin-page-header">
        <div><h2>Homepage Courses</h2><p>Course cards shown on the homepage.</p></div>
      </div>

      <div className="admin-card">
        <div className="admin-card-body">
          {items.map((item, i) => (
            <div key={i} className="array-item">
              <div className="array-item-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="array-item-num">{i + 1}</span>
                  <strong style={{ fontSize: 14 }}>{item.title}</strong>
                </div>
                <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => setItems(s => s.filter((_, idx) => idx !== i))}>🗑</button>
              </div>
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Title</label>
                  <input value={item.title} onChange={e => update(i, 'title', e.target.value)} />
                </div>
                <div className="admin-form-group">
                  <label>Badge Label</label>
                  <input value={item.badge} onChange={e => update(i, 'badge', e.target.value)} placeholder="e.g. Most Popular" />
                </div>
              </div>
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Kanji Character (decoration)</label>
                  <input value={item.kanji} onChange={e => update(i, 'kanji', e.target.value)} placeholder="日本語" />
                </div>
                <div className="admin-form-group">
                  <label>Tag (footer label)</label>
                  <input value={item.tag} onChange={e => update(i, 'tag', e.target.value)} placeholder="6 Levels • N5 to N1" />
                </div>
              </div>
              <div className="admin-form-group">
                <label>Page Link (href)</label>
                <input value={item.href} onChange={e => update(i, 'href', e.target.value)} placeholder="/courses/japanese" />
              </div>
              <div className="admin-form-group">
                <label>Description</label>
                <textarea value={item.desc} onChange={e => update(i, 'desc', e.target.value)} />
              </div>
            </div>
          ))}
          <button className="add-item-btn" onClick={() => setItems(s => [...s, { id: '', title: '', badge: '', desc: '', kanji: '', tag: '', href: '/' }])}>
            ＋ Add Course
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
