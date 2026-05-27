import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import Link from 'next/link'

export const metadata = { title: 'About Us | Tensai Japanese Language Institute' }

export default function AboutPage() {
  return (
    <>
      <Breadcrumb title="About Us" items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />

      <section className="section">
        <div className="container">
          <div className="content-with-sidebar">
            <div className="prose">
              <img src="https://tensai.org.in/wp-content/uploads/2017/08/About-Us.jpg" alt="About TIJL" className="feature-img" />
              <h2>About Tensai Institute of Japanese Language</h2>
              <p>TIJL is a highly reputed Japanese language training institute in the Delhi NCR region. The training provided in the institute is aimed towards helping students pass the JLPT (Japanese Language Proficiency Test).</p>
              <p>TIJL Institute offers students many opportunities — more than 1600 Japanese companies are operating in India in sectors like automobile, electronics, power systems, software development and many more. There are very good career opportunities and also higher study options in Japan.</p>
              <h3>Why Should You Join TIJL?</h3>
              <ul>
                <li>Every student learns Japanese language better and clears doubts without any hesitation.</li>
                <li>The teaching techniques and methodology implemented at our institute is technologically quite advanced.</li>
                <li>We include Audio-Visual tools and conversation-based learning.</li>
                <li>Study material is in sync with the updated course covered in the JLPT.</li>
                <li>Students go through periodic assessments and doubt-clearing sessions.</li>
              </ul>
              <p>Our training methods are focused on teaching every aspect of the Japanese language. Students are trained in vocabulary building, listening and reading. Training includes vocabulary building, reading, listening and grammar.</p>

              <h3>Our Director</h3>
              <img
                src="https://tensai.org.in/wp-content/uploads/2017/08/director-ten.jpg"
                alt="Director"
                style={{ width: 200, maxWidth: '100%', borderRadius: 12, border: '1px solid var(--border)', marginBottom: 16 }}
              />
              <p>Under experienced leadership, TIJL has grown to become one of the most trusted Japanese language institutes in the Delhi NCR region, with a proven track record of student success in JLPT examinations and career placements.</p>

              <div className="prose-btns">
                <Link href="/contact" className="btn-primary">Contact Us</Link>
                <Link href="/registration" className="btn-outline-red">Register Now</Link>
              </div>
            </div>

            <div>
              <div className="sidebar-box">
                <h3>Quick Links</h3>
                <ul className="sidebar-links">
                  <li><Link href="/courses/japanese">Japanese Language</Link></li>
                  <li><Link href="/courses/jlpt">JLPT Courses</Link></li>
                  <li><Link href="/fees">Fee Structure</Link></li>
                  <li><Link href="/batch-timing">Batch Timing</Link></li>
                  <li><Link href="/services/placement">Career Placement</Link></li>
                  <li><Link href="/services/study-japan">Study in Japan</Link></li>
                  <li><Link href="/gallery">Gallery</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
              <div className="sidebar-box">
                <h3>Contact Info</h3>
                <div className="sidebar-contact">
                  <div>📞 <Link href="tel:+917289026558">+91-7289026558</Link></div>
                  <div>✉ <Link href="mailto:tensaieducation@gmail.com">tensaieducation@gmail.com</Link></div>
                  <div>📍 C-78, Second Floor, Sector-2, Noida (Near Priya Gold Biscuits)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Start Your Japanese Journey Today"
        desc="Enrol now and unlock a world of opportunities."
        btn1={{ label: 'Register Now', href: '/registration' }}
        btn2={{ label: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}
