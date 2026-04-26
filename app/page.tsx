import HeroSlider from '@/components/HeroSlider'
import CTABand from '@/components/CTABand'
import Link from 'next/link'
import siteData from '@/data/site.json'

export default function HomePage() {
  const { slides, stats, highlights, courses, services, whyPoints } = siteData

  return (
    <>
      <HeroSlider slides={slides} />

      {/* Stats Strip */}
      <div className="stats-strip">
        <div className="stats-inner">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-num">{s.num}<sup>{s.sup}</sup></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Choose TIJL</span>
            <h2>Delhi NCR&apos;s Most Trusted Japanese Institute</h2>
            <div className="divider" />
            <p>Expert faculty, JLPT-aligned curriculum, and dedicated career placement support.</p>
          </div>
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-card">
                <div className="hc-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
                <Link href={h.link} className="read-more">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Courses</span>
            <h2>Structured Language Programs</h2>
            <div className="divider" />
            <p>From absolute beginner to advanced proficiency — every level covered.</p>
          </div>
          <div className="courses-grid">
            {courses.map((c, i) => (
              <Link key={i} href={c.href} className="course-card">
                <div className="course-thumb">
                  <span className="course-thumb-kanji">{c.kanji}</span>
                  <span className="course-badge">{c.badge}</span>
                </div>
                <div className="course-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
                <div className="course-footer">
                  <span className="course-tag">{c.tag}</span>
                  <span className="course-link">View Course →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why TIJL */}
      <section className="section">
        <div className="container">
          <div className="why-grid">
            <div className="why-visual">
              <span className="why-kanji">日本語</span>
              <div className="why-pills">
                <div className="why-pill"><div className="why-pill-icon">🎓</div><div className="why-pill-text"><strong>Expert Faculty</strong><span>Certified language instructors</span></div></div>
                <div className="why-pill"><div className="why-pill-icon">📋</div><div className="why-pill-text"><strong>JLPT Aligned</strong><span>N5 through N1 curriculum</span></div></div>
                <div className="why-pill"><div className="why-pill-icon">💼</div><div className="why-pill-text"><strong>100% Placement</strong><span>1600+ company network</span></div></div>
                <div className="why-pill"><div className="why-pill-icon">🏆</div><div className="why-pill-text"><strong>15+ Years</strong><span>Trusted institute since 2009</span></div></div>
              </div>
            </div>
            <div className="why-content">
              <span className="eyebrow">About TIJL</span>
              <h2>The Right Institute for Your Japanese Journey</h2>
              <p>TIJL has been shaping Japanese language professionals for over 15 years in Delhi NCR. Our methodology combines conversational learning, JLPT exam prep, and real-world career support.</p>
              <ul className="why-list">
                {whyPoints.map((p, i) => (
                  <li key={i}><span className="check">✓</span>{p}</li>
                ))}
              </ul>
              <div className="why-btns">
                <Link href="/about" className="btn-primary">About TIJL</Link>
                <Link href="/registration" className="btn-outline-red">Register Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Services</span>
            <h2>Beyond the Classroom</h2>
            <div className="divider" />
            <p>We support your complete journey — from language learning to career success.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="service-card">
                <span className="sc-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Start Your Japanese Journey Today"
        desc="Join thousands of students who have transformed their careers through Japanese language expertise."
        btn1={{ label: 'Register Now', href: '/registration' }}
        btn2={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
