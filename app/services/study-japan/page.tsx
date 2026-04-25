import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = { title: 'Study in Japan | TIJL' }

export default function StudyJapanPage() {
  return (
    <>
      <Breadcrumb title="Study in Japan" items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Study in Japan' }]} />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <div className="prose">
              <h2>Study in Japan — Your Gateway to the Land of the Rising Sun</h2>
              <p>Japan offers world-class education, cutting-edge technology, and rich cultural experiences. TIJL guides students through the entire process of studying in Japan — from language preparation to university admission.</p>
              <h3>Why Study in Japan?</h3>
              <ul>
                <li>World-renowned universities and research institutions</li>
                <li>Generous government and university scholarships available</li>
                <li>Safe, clean, and student-friendly environment</li>
                <li>Part-time work opportunities while studying</li>
                <li>Gateway to a lifelong career in Japan or with Japanese companies</li>
                <li>Deep cultural immersion for true language mastery</li>
              </ul>
              <h3>How TIJL Helps</h3>
              <ul>
                <li>JLPT preparation to meet university language requirements</li>
                <li>Guidance on scholarship applications (MEXT, JASSO etc.)</li>
                <li>Assistance with student visa documentation</li>
                <li>University selection and application support</li>
                <li>Pre-departure orientation and cultural briefing</li>
              </ul>
              <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Get Guidance</Link>
                <Link href="/courses/jlpt" className="btn-outline-red">View JLPT Courses</Link>
              </div>
            </div>
            <div>
              <div className="sidebar-box">
                <h3>Our Services</h3>
                <ul className="sidebar-links">
                  <li><Link href="/services/placement">Career Placement</Link></li>
                  <li><Link href="/services/counselling">Career Counselling</Link></li>
                  <li><Link href="/services/activities">Extra Activities</Link></li>
                  <li><Link href="/services/study-japan" className="active">Study in Japan ←</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Begin Your Japanese Education Journey"
        desc="Talk to our counsellors about studying in Japan today."
        btn1={{ label: 'Contact Us', href: '/contact' }}
        btn2={{ label: 'Register Now', href: '/registration' }}
      />
    </>
  )
}
