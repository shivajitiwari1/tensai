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
            <h2>Institute Batch Timing</h2>
            <div className="divider" />
            <p>Online and offline classes available for our institute batches. Friday is weekly off and every class runs for 2 hours.</p>
          </div>

          <div className="batch-highlights">
            <div className="batch-highlight-item">
              <span>🌐</span>
              <div>
                <strong>Online + Offline</strong>
                <p>Learn in-person or from home.</p>
              </div>
            </div>
            <div className="batch-highlight-item">
              <span>⏱️</span>
              <div>
                <strong>2 Hour Classes</strong>
                <p>Focused sessions for fast progress.</p>
              </div>
            </div>
            <div className="batch-highlight-item">
              <span>📅</span>
              <div>
                <strong>Friday Off</strong>
                <p>Weekly rest day for students.</p>
              </div>
            </div>
          </div>

          <div className="batch-table-card">
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
          </div>

          <h3 className="section-subtitle">Pick Your Best Batch</h3>

          <div className="batch-card-grid">
            {[
              { icon: '📘', days: 'Monday & Wednesday', time: '10:00 AM – 12:00 PM', type: 'Online + Offline' },
              { icon: '📙', days: 'Tuesday & Thursday',  time: '2:00 PM – 4:00 PM',   type: 'Online + Offline' },
              { icon: '📗', days: 'Saturday & Sunday',   time: '10:00 AM – 12:00 PM', type: 'Weekend Intensive' },
            ].map((b, i) => (
              <Link key={i} href="/registration" className="batch-card batch-card-link">
                <div className="batch-card-icon">{b.icon}</div>
                <h3>{b.days}</h3>
                <p>{b.time}</p>
                <span>{b.type}</span>
                <div className="batch-card-cta">Register for this Batch →</div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/registration" className="btn-primary">Register for a Batch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
