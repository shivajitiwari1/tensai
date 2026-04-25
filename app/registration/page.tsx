'use client'
import { useState } from 'react'
import Breadcrumb from '@/components/Breadcrumb'

const initialForm = {
  firstName: '', lastName: '', dob: '', gender: '',
  email: '', phone: '', whatsapp: '',
  address: '', city: '', state: '',
  courseLevel: '', batchType: '', howHeard: '', message: ''
}

export default function RegistrationPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/registrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Breadcrumb title="Register Now" items={[{ label: 'Home', href: '/' }, { label: 'Registration' }]} />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reg-form-wrap">
              <h2>Student Registration Form</h2>
              <p style={{ fontSize: 15, color: 'var(--ink-muted)', marginBottom: 32 }}>
                Fill in the form below and our team will contact you to confirm your enrollment and batch details.
              </p>

              {status === 'success' && <div className="alert-success">✓ Registration submitted! We will contact you soon to confirm your batch details.</div>}
              {status === 'error' && <div className="alert-error">Something went wrong. Please try again or call us directly.</div>}

              <form onSubmit={handleSubmit}>
                <div className="reg-grid">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input required value={form.firstName} onChange={set('firstName')} placeholder="First name" />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input required value={form.lastName} onChange={set('lastName')} placeholder="Last name" />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" value={form.dob} onChange={set('dob')} />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select value={form.gender} onChange={set('gender')}>
                      <option value="">Select...</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" required value={form.email} onChange={set('email')} placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input required value={form.phone} onChange={set('phone')} placeholder="+91-XXXXXXXXXX" />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp Number</label>
                    <input value={form.whatsapp} onChange={set('whatsapp')} placeholder="If different from above" />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input value={form.city} onChange={set('city')} placeholder="Your city" />
                  </div>
                  <div className="form-group">
                    <label>Course / Level *</label>
                    <select required value={form.courseLevel} onChange={set('courseLevel')}>
                      <option value="">Select a course...</option>
                      <option>Level I — Conversational / N5</option>
                      <option>Level II — Fast Track Basic</option>
                      <option>Level III — Basic (N5)</option>
                      <option>Level IV — Intermediate (N4)</option>
                      <option>Level V — Upper Intermediate (N3)</option>
                      <option>Level VI — Advanced (N2)</option>
                      <option>JLPT Preparation</option>
                      <option>International Language</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Preferred Batch</label>
                    <select value={form.batchType} onChange={set('batchType')}>
                      <option value="">Select...</option>
                      <option>Morning (10:00 AM – 12:30 PM)</option>
                      <option>Afternoon (2:30 PM – 5:00 PM)</option>
                      <option>Evening (6:30 PM – 7:45 PM)</option>
                      <option>Weekend — Morning (10:00 AM – 1:30 PM)</option>
                      <option>Weekend — Afternoon (2:30 PM – 6:00 PM)</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Home Address</label>
                    <input value={form.address} onChange={set('address')} placeholder="Street address" />
                  </div>
                  <div className="form-group">
                    <label>How Did You Hear About Us?</label>
                    <select value={form.howHeard} onChange={set('howHeard')}>
                      <option value="">Select...</option>
                      <option>Google Search</option>
                      <option>Social Media</option>
                      <option>Friend / Family Referral</option>
                      <option>Newspaper / Advertisement</option>
                      <option>Walking By / Signboard</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Additional Message</label>
                    <textarea value={form.message} onChange={set('message')} placeholder="Any specific questions or requirements you'd like us to know..." />
                  </div>
                </div>
                <button type="submit" className="submit-btn" disabled={status === 'loading'} style={{ marginTop: 8 }}>
                  {status === 'loading' ? 'Submitting...' : 'Submit Registration →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
