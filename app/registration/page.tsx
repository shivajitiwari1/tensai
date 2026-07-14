'use client'
import { useState, useRef } from 'react'
import Breadcrumb from '@/components/Breadcrumb'

const initialForm = {
  firstName: '', lastName: '', dob: '', gender: '',
  email: '', phone: '', whatsapp: '',
  address: '', city: '', state: '',
  courseLevel: '', howHeard: '', message: '',
  educationQual: '',
}

export default function RegistrationPage() {
  const [form, setForm] = useState(initialForm)
  const [photo, setPhoto] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [eduDoc, setEduDoc] = useState<File | null>(null)
  const [idProof, setIdProof] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const photoRef = useRef<HTMLInputElement>(null)
  const eduRef  = useRef<HTMLInputElement>(null)
  const idRef   = useRef<HTMLInputElement>(null)

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setPhoto(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = ev => setPhotoPreview(ev.target?.result as string)
      reader.readAsDataURL(file)
    } else {
      setPhotoPreview(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      if (photo)   fd.append('photo', photo)
      if (eduDoc)  fd.append('eduDoc', eduDoc)
      if (idProof) fd.append('idProof', idProof)

      const res = await fetch('/api/registrations', { method: 'POST', body: fd })
      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
        setPhoto(null); setPhotoPreview(null)
        setEduDoc(null); setIdProof(null)
        if (photoRef.current) photoRef.current.value = ''
        if (eduRef.current)   eduRef.current.value   = ''
        if (idRef.current)    idRef.current.value    = ''
      } else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <>
      <Breadcrumb title="Register Now" items={[{ label: 'Home', href: '/' }, { label: 'Registration' }]} />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div className="reg-form-wrap">
              <h2>Student Registration Form</h2>
              <p className="reg-intro">
                Fill in the form below and our team will contact you to confirm your enrollment and batch details.
              </p>

              {status === 'success' && <div className="alert-success">✓ Registration submitted! We will contact you soon to confirm your batch details.</div>}
              {status === 'error'   && <div className="alert-error">Something went wrong. Please try again or call us directly.</div>}

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="reg-grid">

                  {/* ── Photo Upload ── */}
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Passport Size Photo</label>
                    <div className="upload-photo-row">
                      <div
                        className="photo-preview"
                        onClick={() => photoRef.current?.click()}
                        title="Click to upload photo"
                      >
                        {photoPreview
                          ? <img src={photoPreview} alt="Preview" />
                          : <div className="photo-placeholder">
                              <span>📷</span>
                              <small>Click to upload photo</small>
                            </div>
                        }
                      </div>
                      <div className="photo-meta">
                        <p>Upload a recent passport-size photograph.</p>
                        <ul>
                          <li>Clear front-facing photo</li>
                          <li>JPG or PNG format</li>
                          <li>Max size: 2 MB</li>
                        </ul>
                        <button type="button" className="upload-btn" onClick={() => photoRef.current?.click()}>
                          {photo ? `✓ ${photo.name}` : 'Choose Photo'}
                        </button>
                        <input ref={photoRef} type="file" accept="image/*" onChange={handlePhoto} style={{ display: 'none' }} />
                      </div>
                    </div>
                  </div>

                  {/* ── Personal Info ── */}
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

                  {/* ── Education Qualification ── */}
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Education Qualification *</label>
                    <div className="upload-doc-row">
                      <select required value={form.educationQual} onChange={set('educationQual')} style={{ flex: 1 }}>
                        <option value="">Select highest qualification...</option>
                        <option>10th Pass (High School)</option>
                        <option>12th Pass (Intermediate)</option>
                        <option>Diploma</option>
                        <option>Bachelor's Degree (B.A. / B.Sc. / B.Com / B.Tech)</option>
                        <option>Master's Degree (M.A. / M.Sc. / M.Com / M.Tech)</option>
                        <option>PhD / Doctorate</option>
                        <option>Other</option>
                      </select>
                      <div className="upload-doc-btn-wrap">
                        <button type="button" className={`upload-btn ${eduDoc ? 'upload-btn-done' : ''}`} onClick={() => eduRef.current?.click()}>
                          {eduDoc ? `✓ ${eduDoc.name}` : '📎 Upload Certificate'}
                        </button>
                        <input ref={eduRef} type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={e => setEduDoc(e.target.files?.[0] ?? null)} style={{ display: 'none' }} />
                        <small>PDF, JPG or PNG · Max 5 MB</small>
                      </div>
                    </div>
                  </div>

                  {/* ── ID Proof ── */}
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>ID Proof *</label>
                    <div className="upload-doc-row">
                      <div className="upload-doc-box" onClick={() => idRef.current?.click()}>
                        <span className="upload-doc-icon">🪪</span>
                        <div>
                          <strong>{idProof ? idProof.name : 'Upload Identity Document'}</strong>
                          <p>Aadhaar Card, PAN Card, Passport or Voter ID</p>
                          <small>PDF, JPG or PNG · Max 5 MB</small>
                        </div>
                        <button type="button" className={`upload-btn ${idProof ? 'upload-btn-done' : ''}`}>
                          {idProof ? '✓ Uploaded' : 'Choose File'}
                        </button>
                        <input ref={idRef} type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={e => setIdProof(e.target.files?.[0] ?? null)} style={{ display: 'none' }} />
                      </div>
                    </div>
                  </div>

                  {/* ── Course & Other ── */}
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Course / Level *</label>
                    <select required value={form.courseLevel} onChange={set('courseLevel')}>
                      <option value="">Select a course...</option>
                      <option>Level I — Conversational / N5</option>
                      <option>Level II — Fast Track Basic</option>
                      <option>Level III — Basic (N5)</option>
                      <option>Level IV — Intermediate (N4)</option>
                      <option>Level V — Upper Intermediate (N3)</option>
                      <option>Level VI — Advanced (N2)</option>
                      <option>Level VII — Proficiency (N1)</option>
                      <option>JLPT Preparation</option>
                      <option>International Language</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Home Address</label>
                    <input value={form.address} onChange={set('address')} placeholder="Street address" />
                  </div>
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
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
