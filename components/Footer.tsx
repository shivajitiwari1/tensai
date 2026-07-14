import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <img
            src="/images/logo.jpg"
            alt="Tensai"
            style={{ height: 52, borderRadius: 6, background: '#fff', padding: 4, marginBottom: 12, display: 'block' }}
          />
          <p>TIJL is a highly reputed Japanese language training institute in Delhi NCR, helping students achieve JLPT certification and career success in Japanese companies.</p>
        </div>
        <div className="footer-col">
          <h4>Courses</h4>
          <ul>
            <li><Link href="/courses/japanese">Japanese Language</Link></li>
            <li><Link href="/courses/jlpt">JLPT Preparation</Link></li>
            <li><Link href="/courses/international">International Language</Link></li>
            <li><Link href="/fees">Fee Structure</Link></li>
            <li><Link href="/batch-timing">Batch Timing</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services/placement">Career Placement</Link></li>
            <li><Link href="/services/counselling">Career Counselling</Link></li>
            <li><Link href="/services/activities">Extra Activities</Link></li>
            <li><Link href="/services/study-japan">Study in Japan</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><span>📍 Sector-2, Noida</span></li>
            <li><Link href="tel:+917289026558">📞 +91-7289026558</Link></li>
            <li><Link href="mailto:japanindia1947@gmail.com" style={{ fontSize: 13 }}>✉ japanindia1947@gmail.com</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/registration">Register Now</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>TIJL © All Rights Reserved {new Date().getFullYear()}</span>
        <span>Tensai Japanese Language Institute, Noida</span>
      </div>
    </footer>
  )
}
