import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'

export const metadata = { title: 'Career Counselling | TIJL' }

export default function CounsellingPage() {
  return (
    <>
      <Breadcrumb title="Career Counselling" items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Career Counselling' }]} />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <div className="prose">
              <h2>Career Counselling at TIJL</h2>
              <p>At TIJL, we don't just teach the language — we guide your entire career journey. Our career counselling cell provides personalized one-on-one guidance to help students make informed decisions about their professional future in Japanese-related industries.</p>
              <h3>What We Offer</h3>
              <ul>
                <li>One-on-one career guidance sessions with experienced counsellors</li>
                <li>Industry mapping — understanding which sector suits your profile</li>
                <li>Resume and cover letter assistance in Japanese and English</li>
                <li>Interview preparation and mock interview sessions</li>
                <li>Guidance on JLPT level requirements for specific job roles</li>
                <li>Higher education and scholarship counselling for Japan</li>
                <li>Networking introductions to Japanese company representatives</li>
              </ul>
              <h3>Career Paths for Japanese Language Learners</h3>
              <div className="highlights-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 20 }}>
                <div className="highlight-card"><div className="hc-icon">🗣</div><h3>Interpreter / Translator</h3><p>Work with Japanese companies in India or abroad as a professional interpreter or document translator.</p></div>
                <div className="highlight-card"><div className="hc-icon">🏢</div><h3>Corporate Roles</h3><p>Join Japanese MNCs in management, operations, customer relations, and business development roles.</p></div>
                <div className="highlight-card"><div className="hc-icon">✈️</div><h3>Tourism & Hospitality</h3><p>Guide, assist, and manage Japanese tourists and business travellers in India and Japan.</p></div>
                <div className="highlight-card"><div className="hc-icon">🎓</div><h3>Teaching / Academia</h3><p>Teach Japanese at institutes, schools, or universities after achieving N2/N1 certification.</p></div>
              </div>
              <div style={{ marginTop: 32 }}>
                <Link href="/contact" className="btn-primary">Book a Counselling Session</Link>
              </div>
            </div>

            <div>
              <div className="sidebar-box">
                <h3>Our Services</h3>
                <ul className="sidebar-links">
                  <li><Link href="/services/placement">Career Placement</Link></li>
                  <li><Link href="/services/counselling" className="active">Career Counselling ←</Link></li>
                  <li><Link href="/services/activities">Extra Activities</Link></li>
                  <li><Link href="/services/study-japan">Study in Japan</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
