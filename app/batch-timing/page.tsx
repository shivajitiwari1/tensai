import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import siteData from '@/data/site.json'

export const metadata = { title: 'Batch Timing | TIJL' }

export default function BatchTimingPage() {
  const { batchTimings } = siteData
  return (
    <>
      <Breadcrumb title="Batch Timing" items={[{ label: 'Home', href: '/' }, { label: 'Batch Timing' }]} />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Flexible Schedules</span>
            <h2>Batch Schedule</h2>
            <div className="divider" />
            <p>Choose the batch that fits your schedule — weekday and weekend options available.</p>
          </div>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, marginBottom: 24, textAlign: 'center' }}>Japanese Language Course</h3>

          <div className="batch-table-wrap">
            <table className="batch-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Batch I</th>
                  <th>Batch II</th>
                  <th>Batch III</th>
                </tr>
              </thead>
              <tbody>
                {batchTimings.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.description}</strong></td>
                    <td>{row.batch1.includes('AM') || row.batch1.includes('PM') ? <span className="time-badge">{row.batch1}</span> : row.batch1}</td>
                    <td>{row.batch2.includes('AM') || row.batch2.includes('PM') ? <span className="time-badge">{row.batch2}</span> : row.batch2}</td>
                    <td style={{ color: row.batch3 === '—' ? 'var(--ink-soft)' : undefined }}>{row.batch3.includes('AM') || row.batch3.includes('PM') ? <span className="time-badge">{row.batch3}</span> : row.batch3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="services-grid" style={{ marginTop: 48 }}>
            <div className="service-card">
              <span className="sc-icon">🌅</span>
              <h3>Morning Batch</h3>
              <p>10:00 AM – 12:30 PM. Ideal for students and homemakers with free mornings.</p>
            </div>
            <div className="service-card">
              <span className="sc-icon">☀️</span>
              <h3>Afternoon Batch</h3>
              <p>2:30 PM – 5:00 PM. Perfect for those with morning commitments.</p>
            </div>
            <div className="service-card">
              <span className="sc-icon">🌆</span>
              <h3>Evening Batch</h3>
              <p>6:30 PM – 7:45 PM. Designed for working professionals.</p>
            </div>
            <div className="service-card">
              <span className="sc-icon">📅</span>
              <h3>Weekend Batch</h3>
              <p>Saturday & Sunday. For those who cannot attend weekdays.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/registration" className="btn-primary">Register for a Batch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
