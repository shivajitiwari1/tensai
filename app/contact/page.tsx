import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { getSiteData } from '@/lib/getSiteData'
import ContactForm from './ContactForm'

export const dynamic = 'force-dynamic'

export default function ContactPage() {
  const { contact } = getSiteData()

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
                    <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-detail-text">
                    <strong>Email</strong>
                    <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
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
              <div className="map-embed">
                <iframe
                  src={contact.mapEmbed}
                  title="TIJL Location"
                  loading="lazy"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
