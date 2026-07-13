import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import Link from 'next/link'
import { getSiteData } from '@/lib/getSiteData'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Japanese Language Courses | TIJL' }

export default function JapanesePage() {
  const { japaneseLevels, highlights } = getSiteData()
  const scheduleBatches = ['Monday & Wednesday', 'Tuesday & Thursday', 'Saturday & Sunday']

  return (
    <>
      <Breadcrumb title="Japanese Language" items={[{ label: 'Home', href: '/' }, { label: 'Courses', href: '/' }, { label: 'Japanese Language' }]} />

      <section className="section course-hero-section">
        <div className="container">
          <div className="course-hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Japanese Language Programme</span>
              <h1 className="course-title">Premium Japanese institute coaching for JLPT success</h1>
              <p className="course-intro">Unlock fluent Japanese with blended online + offline training, expert faculty, and JLPT-focused lessons designed for every learner.</p>

              <ul className="hero-features">
                <li>Online &amp; offline classes available</li>
                <li>2-hour sessions with Friday weekly off</li>
                <li>Small batches for personalized attention</li>
                <li>Focused JLPT preparation from N5 to N1</li>
              </ul>

              <div className="prose-btns">
                <Link href="/registration" className="btn-primary">Enroll Now</Link>
                <Link href="/batch-timing" className="btn-outline-red">View Batch Timings</Link>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-head">
                <span>Course Snapshot</span>
                <strong>Japanese Language Levels</strong>
              </div>
              <div className="hero-keypoints">
                <div>
                  <span>Duration</span>
                  <strong>6 months</strong>
                </div>
                <div>
                  <span>Session</span>
                  <strong>2 hours</strong>
                </div>
                <div>
                  <span>Weekly off</span>
                  <strong>Friday</strong>
                </div>
                <div>
                  <span>Mode</span>
                  <strong>Online &amp; Offline</strong>
                </div>
              </div>

              <div className="batch-pill-grid">
                {scheduleBatches.map((batch) => (
                  <div key={batch} className="batch-pill">{batch}</div>
                ))}
              </div>

              <div className="hero-card-footer">
                <p>Perfect for working professionals, students, and anyone preparing for JLPT certification with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why TIJL</span>
            <h2>What makes our Japanese courses so effective</h2>
          </div>

          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="hc-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link href={item.link} className="read-more">Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <div className="prose">
              <img src="/images/japanese-education.jpg" alt="Japanese Language" className="feature-img" />
              <h2>Become a confident Japanese communicator</h2>
              <p>Our Japanese programme blends language fundamentals with real JLPT practice, live conversation drills, and exam-ready strategies. Whether you are starting from scratch or moving toward N1, TIJL delivers the structure and support you need.</p>

              <div className="level-cards">
                {japaneseLevels.map((level, index) => (
                  <div key={index} className="level-card">
                    <span className="level-badge">{level.badge}</span>
                    <h3>{level.title}</h3>
                    <p>{level.desc}</p>
                  </div>
                ))}
              </div>

              <div className="prose-btns">
                <Link href="/fees" className="btn-outline-red">View Fee Structure</Link>
                <Link href="/registration" className="btn-primary">Start Registration</Link>
              </div>
            </div>

            <div>
              <div className="sidebar-box">
                <h3>Quick Facts</h3>
                <ul className="feature-list">
                  <li>6 months course duration</li>
                  <li>2 hours per session</li>
                  <li>Friday weekly off</li>
                  <li>Online &amp; offline batches</li>
                  <li>JLPT aligned study plan</li>
                </ul>
              </div>

              <div className="sidebar-box">
                <h3>JLPT Levels at TIJL</h3>
                <div className="level-breakdown">
                  {['N5', 'N4', 'N3', 'N2', 'N1'].map((level) => (
                    <div key={level} className="level-row">
                      <span>{level}</span>
                      <span>{level === 'N5' ? 'Beginner' : level === 'N4' ? 'Elementary' : level === 'N3' ? 'Intermediate' : level === 'N2' ? 'Advanced' : 'Proficient'}</span>
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
