'use client'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/AdminShell'
import { useAdminAuth } from '@/components/useAdminAuth'

interface ContactInfo { address: string; phone: string; email: string; hours: string; mapEmbed: string }

export default function ContactEditorPage() {
  const { checking } = useAdminAuth()
  const [info, setInfo] = useState<ContactInfo>({ address: '', phone: '', email: '', hours: '', mapEmbed: '' })
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  useEffect(() => {
    if (checking) return
    fetch('/api/admin/site?section=contact').then(r => r.json()).then(setInfo)
  }, [checking])

  const update = (field: keyof ContactInfo, val: string) => setInfo(i => ({ ...i, [field]: val }))

  const save = async () => {
    setStatus('saving')
    const res = await fetch('/api/admin/site?section=contact', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(info),
    })
    setStatus(res.ok ? 'saved' : 'error')
    setTimeout(() => setStatus('idle'), 3000)
  }

  if (checking) return null

  return (
    <AdminShell title="Edit Contact Info">
      <div className="admin-page-header">
        <div><h2>Contact Information</h2><p>Details shown on the Contact page and footer.</p></div>
      </div>

      <div className="admin-card">
        <div className="admin-card-body">
          <div className="admin-form-group">
            <label>📍 Address</label>
            <textarea value={info.address} onChange={e => update('address', e.target.value)} placeholder="Full address..." style={{ minHeight: 60 }} />
          </div>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label>📞 Phone Number</label>
              <input value={info.phone} onChange={e => update('phone', e.target.value)} placeholder="+91-XXXXXXXXXX" />
            </div>
            <div className="admin-form-group">
              <label>✉️ Email Address</label>
              <input type="email" value={info.email} onChange={e => update('email', e.target.value)} placeholder="info@example.com" />
            </div>
          </div>
          <div className="admin-form-group">
            <label>🕐 Office Hours</label>
            <input value={info.hours} onChange={e => update('hours', e.target.value)} placeholder="Monday – Saturday: 9:00 AM – 7:00 PM" />
          </div>
          <div className="admin-form-group">
            <label>🗺️ Google Maps Embed URL</label>
            <textarea
              value={info.mapEmbed}
              onChange={e => update('mapEmbed', e.target.value)}
              placeholder="https://www.google.com/maps/embed?pb=..."
              style={{ minHeight: 80, fontSize: 12 }}
            />
            <p style={{ fontSize: 12, color: '#7a7a7a', marginTop: 6 }}>
              Get embed URL: Google Maps → Share → Embed a map → Copy the src URL from the iframe code.
            </p>
          </div>
          {info.mapEmbed && (
            <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid #e5e7eb', marginTop: 8 }}>
              <iframe src={info.mapEmbed} title="Map Preview" style={{ width: '100%', height: 200, display: 'block', border: 'none' }} loading="lazy" />
            </div>
          )}
        </div>
      </div>

      <div className="admin-save-bar">
        <p className={status === 'saved' ? 'save-success' : status === 'error' ? 'save-error' : ''}>
          {status === 'saved' ? '✓ Contact info saved!' : status === 'error' ? '✗ Error saving.' : ''}
        </p>
        <button className="admin-btn admin-btn-primary" onClick={save} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving...' : '💾 Save Changes'}
        </button>
      </div>
    </AdminShell>
  )
}
