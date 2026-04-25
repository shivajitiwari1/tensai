import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import siteData from '@/data/site.json'

export const metadata = { title: 'Fee Structure | TIJL' }

export default function FeesPage() {
  const { fees } = siteData
  return (
    <>
      <Breadcrumb title="Fee Structure" items={[{ label: 'Home', href: '/' }, { label: 'Fee Structure' }]} />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Transparent Pricing</span>
            <h2>Course Fee Structure</h2>
            <div className="divider" />
            <p>Affordable, transparent fees for all levels. No hidden charges.</p>
          </div>

          <div className="fee-grid">
            {fees.map((f, i) => (
              <div key={i} className={`fee-card${f.popular ? ' popular' : ''}`}>
                {f.popular && <div className="popular-badge">⭐ Most Popular</div>}
                <div className="fee-card-header">
                  <h3>{f.title}</h3>
                  <div className="level">{f.level}</div>
                  <div className="fee-price">{f.price}<span>/course</span></div>
                  <div className="fee-duration">{f.duration} duration</div>
                </div>
                <ul className="fee-features">
                  {f.features.map((feat, j) => <li key={j}>{feat}</li>)}
                </ul>
                <div className="fee-cta">
                  <Link href="/registration" className="fee-cta-btn">Enrol Now</Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--cream2)', borderRadius: 14, padding: '28px 32px', marginTop: 40, display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' as const }}>
            <div style={{ fontSize: 28 }}>ℹ️</div>
            <div>
              <strong style={{ display: 'block', marginBottom: 6, fontSize: 16 }}>Important Notes</strong>
              <p style={{ fontSize: 14, color: 'var(--ink-muted)', margin: 0, lineHeight: 1.8 }}>
                Fees mentioned above are approximate. Actual fees may vary based on batch type (weekday/weekend), course level, and duration. Please contact us directly for the most current fee information. Study materials may be charged separately. Scholarships and discounts may be available.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/contact" className="btn-primary">Contact for Exact Fees</Link>
          </div>
        </div>
      </section>
    </>
  )
}
