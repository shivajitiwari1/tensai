'use client'
import { useState } from 'react'

export default function ContactForm() {
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
    <div className="form-card">
      <h2>Send Us a Message</h2>
      {status === 'success' && <div className="alert-success">✓ Message sent! We&apos;ll get back to you soon.</div>}
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
  )
}
