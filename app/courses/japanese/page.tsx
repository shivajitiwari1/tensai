import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import Link from 'next/link'
import siteData from '@/data/site.json'

export const metadata = { title: 'Japanese Language Courses | TIJL' }

export default function JapanesePage() {
  const { japaneseLevels } = siteData
  return (
    <>
      <Breadcrumb title="Japanese Language" items={[{ label: 'Home', href: '/' }, { label: 'Courses', href: '/' }, { label: 'Japanese Language' }]} />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <div className="prose">
              <img src="https://tensai.org.in/wp-content/uploads/2016/10/Japanese-Education.jpg" alt="Japanese Language" className="feature-img" />
              <h2>Welcome to Tensai Institute of Japanese Language</h2>
              <p>Our Japanese Language courses are carefully structured to take learners from absolute beginners to advanced proficiency, with each level preparing students for the corresponding JLPT certification.</p>

              <div className="level-cards" style={{ marginTop: 28 }}>
                {japaneseLevels.map((l, i) => (
                  <div key={i} className="level-card">
                    <span className="level-badge">{l.badge}</span>
                    <h3>{l.title}</h3>
                    <p>{l.desc}</p>
                  </div>
                ))}
              </div>

              <div className="prose-btns" style={{ marginTop: 32 }}>
                <Link href="/registration" className="btn-primary">Enrol Now</Link>
                <Link href="/fees" className="btn-outline-red">View Fee Structure</Link>
                <Link href="/batch-timing" className="btn-outline-red">Batch Timings</Link>
              </div>
            </div>

            <div>
              <div className="sidebar-box">
                <h3>All Courses</h3>
                <ul className="sidebar-links">
                  <li><Link href="/courses/japanese" className="active">Japanese Language ←</Link></li>
                  <li><Link href="/courses/jlpt">JLPT Preparation</Link></li>
                  <li><Link href="/courses/international">International Language</Link></li>
                  <li><Link href="/fees">Fee Structure</Link></li>
                  <li><Link href="/batch-timing">Batch Timing</Link></li>
                </ul>
              </div>
              <div className="sidebar-box">
                <h3>JLPT Levels at TIJL</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13.5 }}>
                  {[['N5','Beginner'],['N4','Elementary'],['N3','Intermediate'],['N2','Advanced'],['N1','Proficient']].map(([l, n]) => (
                    <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                      <span>{l}</span>
                      <span style={{ background: 'var(--red-light)', color: 'var(--red)', padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600 }}>{n}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Learn Japanese?"
        desc="Register today and begin your language journey at TIJL."
        btn1={{ label: 'Register Now', href: '/registration' }}
        btn2={{ label: 'View Batch Timings', href: '/batch-timing' }}
      />
    </>
  )
}
