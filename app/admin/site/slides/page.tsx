'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'

interface Slide {
  tag: string; title: string; desc: string; bg: string;
  btn1: { label: string; href: string };
  btn2: { label: string; href: string };
}

const blank = (): Slide => ({ tag: '', title: '', desc: '', bg: '', btn1: { label: '', href: '' }, btn2: { label: '', href: '' } })

export default function SlidesEditorPage() {
  const { checking } = useAdminAuth()
  const [slides, setSlides] = useState<Slide[]>([])
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  useEffect(() => {
    if (checking) return
    fetch('/api/admin/site?section=slides').then(r => r.json()).then(setSlides)
  }, [checking])

  const update = (i: number, field: string, val: string) => {
    setSlides(s => s.map((item, idx) => {
      if (idx !== i) return item
      if (field.startsWith('btn1.')) return { ...item, btn1: { ...item.btn1, [field.slice(5)]: val } }
      if (field.startsWith('btn2.')) return { ...item, btn2: { ...item.btn2, [field.slice(5)]: val } }
      return { ...item, [field]: val }
    }))
  }

  const save = async () => {
    setStatus('saving')
    const res = await fetch('/api/admin/site?section=slides', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(slides),
    })
    setStatus(res.ok ? 'saved' : 'error')
    setTimeout(() => setStatus('idle'), 3000)
  }

  if (checking) return null

  return (
    <AdminShell title="Edit Hero Slides">
      <div className="admin-page-header">
        <div><h2>Hero Slides</h2><p>Edit the homepage slider — up to 5 slides recommended.</p></div>
      </div>

      <div className="admin-card">
        <div className="admin-card-body">
          {slides.map((s, i) => (
            <div key={i} className="array-item">
              <div className="array-item-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="array-item-num">{i + 1}</span>
                  <strong style={{ fontSize: 14 }}>{s.title || 'Untitled Slide'}</strong>
                </div>
                <div className="array-item-actions">
                  <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => setSlides(s => s.filter((_, idx) => idx !== i))}>🗑 Remove</button>
                </div>
              </div>

              <div className="admin-form-group">
                <label>Tag (small label above title)</label>
                <input value={s.tag} onChange={e => update(i, 'tag', e.target.value)} placeholder="e.g. Premier Japanese Institute" />
              </div>
              <div className="admin-form-group">
                <label>Title *</label>
                <input value={s.title} onChange={e => update(i, 'title', e.target.value)} placeholder="Main headline" />
              </div>
              <div className="admin-form-group">
                <label>Description</label>
                <textarea value={s.desc} onChange={e => update(i, 'desc', e.target.value)} placeholder="Short description under the title" />
              </div>
              <div className="admin-form-group">
                <label>Background Image URL</label>
                <input value={s.bg} onChange={e => update(i, 'bg', e.target.value)} placeholder="https://..." />
                {s.bg && <img src={s.bg} alt="Preview" style={{ marginTop: 8, height: 80, borderRadius: 6, objectFit: 'cover', border: '1px solid #e5e7eb' }} />}
              </div>
              <div className="admin-form-row">
                <div>
                  <div className="admin-form-group"><label>Button 1 Label</label><input value={s.btn1.label} onChange={e => update(i, 'btn1.label', e.target.value)} placeholder="e.g. Explore Courses" /></div>
                  <div className="admin-form-group"><label>Button 1 Link</label><input value={s.btn1.href} onChange={e => update(i, 'btn1.href', e.target.value)} placeholder="/courses/japanese" /></div>
                </div>
                <div>
                  <div className="admin-form-group"><label>Button 2 Label</label><input value={s.btn2.label} onChange={e => update(i, 'btn2.label', e.target.value)} placeholder="e.g. Register Now" /></div>
                  <div className="admin-form-group"><label>Button 2 Link</label><input value={s.btn2.href} onChange={e => update(i, 'btn2.href', e.target.value)} placeholder="/registration" /></div>
                </div>
              </div>
            </div>
          ))}
          <button className="add-item-btn" onClick={() => setSlides(s => [...s, blank()])}>＋ Add New Slide</button>
        </div>
      </div>

      <div className="admin-save-bar">
        <p className={status === 'saved' ? 'save-success' : status === 'error' ? 'save-error' : ''}>
          {status === 'saved' ? '✓ Slides saved!' : status === 'error' ? '✗ Error saving.' : 'Save to apply changes to the website.'}
        </p>
        <button className="admin-btn admin-btn-primary" onClick={save} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving...' : '💾 Save Changes'}
        </button>
      </div>
    </AdminShell>
  )
}
