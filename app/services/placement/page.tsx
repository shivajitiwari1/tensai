import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import { getSiteData } from '@/lib/getSiteData'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Career Placement | TIJL' }

export default function PlacementPage() {
  const { placementSectors } = getSiteData()
  return (
    <>
      <Breadcrumb title="Career Placement" items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Career Placement' }]} />

      <section className="section">
        <div className="container">
          <div className="placement-why-grid">
            <div className="prose">
              <img src="https://tensai.org.in/wp-content/uploads/2017/03/placement.jpg" alt="Career Placement" className="feature-img" />
              <h2>Career Placement Services</h2>
              <p>TENSAI Institute offers students many opportunities — more than 1600 Japanese companies are operating in India in sectors like automobile, electronics, power systems, software development, and many more.</p>
              <p>Japan has the 2nd largest economy in the world and is a prosperous country with the most diverse economy in Asia, with a GDP of $4.9 trillion. Japanese is a gateway to other Asian languages and cultures.</p>
            </div>
            <div>
              <div className="why-visual" style={{ minHeight: 300 }}>
                <span className="why-kanji">仕事</span>
                <div className="why-pills">
                  <div className="why-pill"><div className="why-pill-icon">🏭</div><div className="why-pill-text"><strong>Automobile</strong><span>Leading Japanese auto brands</span></div></div>
                  <div className="why-pill"><div className="why-pill-icon">💻</div><div className="why-pill-text"><strong>Software & IT</strong><span>Technology companies</span></div></div>
                  <div className="why-pill"><div className="why-pill-icon">⚡</div><div className="why-pill-text"><strong>Electronics & Power</strong><span>Industry leaders</span></div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="placement-reasons">
            {[
              ['1', '2nd Largest Economy', "Japan's economy is 2nd only to that of the U.S., making it one of the most stable career destinations globally."],
              ['2', 'Internet Language Group', "An estimated 88 million Japanese speakers — 9.6% of the world's online population — are connected to the internet."],
              ['3', 'Stand Out from the Crowd', 'The majority choose European languages. Knowing Japanese makes you instantly distinctive on your résumé.'],
              ['4', 'Business Opportunities', 'Understanding Japanese work ethic, business etiquette, and cultural nuances can make or break an important business deal.'],
              ['5', 'Asian Cultural Gateway', "Japan's history has been shaped by great Asian civilizations. Knowing Japanese connects you to a rich cultural network."],
              ['6', '1600+ Companies', 'More than 1600 Japanese companies operate in India, creating constant demand for Japanese language professionals.'],
            ].map(([n, title, desc]) => (
              <div key={n} className="reason-card">
                <div className="reason-num">{n}</div>
                <div><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, margin: '48px 0 20px', textAlign: 'center' }}>Industry Sectors Hiring Japanese Speakers</h3>
          <div className="company-sectors">
            {placementSectors.map((s, i) => <div key={i} className="sector-chip">{s}</div>)}
          </div>
        </div>
      </section>

      <CTABand
        title="Launch Your Japanese Career"
        desc="Enrol today and gain access to our placement network."
        btn1={{ label: 'Register Now', href: '/registration' }}
        btn2={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
