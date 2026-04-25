'use client'
import { useState } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import siteData from '@/data/site.json'

export default function ContactPage() {
  const { contact } = siteData
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact-messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Breadcrumb title="Contact Us" items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="contact-info-card">
                <h2>Get in Touch</h2>
                <div className="contact-detail">
                  <div className="contact-icon">📍</div>
                  <div className="contact-detail-text">
                    <strong>Address</strong>
                    <span>{contact.address}</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-icon">📞</div>
                  <div className="contact-detail-text">
                    <strong>Phone</strong>
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-detail-text">
                    <strong>Email</strong>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-icon">🕐</div>
                  <div className="contact-detail-text">
                    <strong>Hours</strong>
                    <span>{contact.hours}</span>
                  </div>
                </div>
              </div>

              <div className="map-embed" style={{ marginTop: 24 }}>
                <iframe
                  src={contact.mapEmbed}
                  title="TIJL Location"
                  style={{ width: '100%', height: 340, display: 'block', border: 'none' }}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="form-card">
              <h2>Send Us a Message</h2>
              {status === 'success' && <div className="alert-success">✓ Message sent! We'll get back to you soon.</div>}
              {status === 'error' && <div className="alert-error">Something went wrong. Please try again.</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+91-XXXXXXXXXX" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder="How can we help?" />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Your message..." />
                </div>
                <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
