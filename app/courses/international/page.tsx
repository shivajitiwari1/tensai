import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'

export const metadata = { title: 'International Language | TIJL' }

export default function InternationalPage() {
  return (
    <>
      <Breadcrumb title="International Language" items={[{ label: 'Home', href: '/' }, { label: 'Courses', href: '/' }, { label: 'International Language' }]} />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <div className="prose">
              <h2>International Language Institute at TIJL</h2>
              <p>TIJL is one of the prominent international language institutes, offering specialized courses with a focus on career applications and global communication.</p>
              <p>Why choose TIJL for international language courses?</p>
              <ul>
                <li>Experienced faculty with expertise in multiple foreign languages</li>
                <li>Career-oriented curriculum aligned with industry requirements</li>
                <li>Small batch sizes for personalized attention and faster progress</li>
                <li>Audio-visual learning tools and modern teaching methodologies</li>
                <li>Regular assessments and doubt-clearing sessions</li>
                <li>Placement assistance for multilingual career roles</li>
              </ul>

              <div className="highlights-grid" style={{ marginTop: 32, gridTemplateColumns: '1fr 1fr' }}>
                <div className="highlight-card">
                  <div className="hc-icon">🇯🇵</div>
                  <h3>Japanese</h3>
                  <p>Our flagship language — all 6 levels from beginner to advanced, aligned with JLPT N5 through N1.</p>
                </div>
                <div className="highlight-card">
                  <div className="hc-icon">🌐</div>
                  <h3>Other Languages</h3>
                  <p>Contact us to enquire about other international language programs currently on offer at the institute.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Enquire Now</Link>
                <Link href="/registration" className="btn-outline-red">Register</Link>
              </div>
            </div>

            <div>
              <div className="sidebar-box">
                <h3>All Courses</h3>
                <ul className="sidebar-links">
                  <li><Link href="/courses/japanese">Japanese Language</Link></li>
                  <li><Link href="/courses/jlpt">JLPT Preparation</Link></li>
                  <li><Link href="/courses/international" className="active">International Language ←</Link></li>
                  <li><Link href="/fees">Fee Structure</Link></li>
                  <li><Link href="/batch-timing">Batch Timing</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
