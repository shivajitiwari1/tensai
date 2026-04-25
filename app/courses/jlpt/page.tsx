import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import Link from 'next/link'
import siteData from '@/data/site.json'

export const metadata = { title: 'JLPT Preparation | TIJL' }

export default function JLPTPage() {
  const { jlptLevels } = siteData
  return (
    <>
      <Breadcrumb title="JLPT" items={[{ label: 'Home', href: '/' }, { label: 'Courses', href: '/' }, { label: 'JLPT' }]} />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Japanese Language Proficiency Test</span>
            <h2 style={{ fontFamily: "'Noto Serif JP', serif" }}>日本語能力試験 (JLPT)</h2>
            <div className="divider" />
            <p>Conducted by the Japanese Government worldwide on the first Sunday of July and December every year.</p>
          </div>

          <div className="jlpt-grid">
            {jlptLevels.map((l, i) => (
              <div key={i} className={`jlpt-card${l.highlight ? ' highlight-card-jlpt' : ''}`}>
                <div className="level-label">{l.level}</div>
                <div className="level-name">{l.name}</div>
                <div className="level-desc">{l.desc}</div>
              </div>
            ))}
          </div>

          <img src="https://tensai.org.in/wp-content/uploads/2016/10/JLPT-FINAL.jpg" alt="JLPT" style={{ width: '100%', maxWidth: 700, borderRadius: 14, display: 'block', margin: '0 auto 48px', border: '1px solid var(--border)' }} />

          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="hc-icon">📅</div>
              <h3>Exam Schedule</h3>
              <p>JLPT is conducted every year on the first Sunday of July and December worldwide. TIJL prepares students for both examination windows with comprehensive practice tests and mock exams.</p>
            </div>
            <div className="highlight-card">
              <div className="hc-icon">🌍</div>
              <h3>Global Recognition</h3>
              <p>The JLPT is recognized by thousands of employers and educational institutions worldwide. It is the definitive proof of Japanese language ability and opens doors to careers and study in Japan.</p>
            </div>
            <div className="highlight-card">
              <div className="hc-icon">📝</div>
              <h3>Exam Structure</h3>
              <p>Each level tests Language Knowledge (Vocabulary/Grammar), Reading, and Listening. TIJL's curriculum is directly aligned with each level's requirements to maximize pass rates.</p>
            </div>
          </div>

          <div style={{ background: 'var(--cream2)', borderRadius: 14, padding: 32, marginTop: 40, display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 8 }}>Useful Links</h3>
            <a href="http://www.jlpt.jp/e/" target="_blank" rel="noreferrer" style={{ color: 'var(--red)', fontSize: 15, fontWeight: 500 }}>→ Official JLPT Website — Get details about the exam</a>
            <a href="http://www.in.emb-japan.go.jp/itprtop_en/index.html" target="_blank" rel="noreferrer" style={{ color: 'var(--red)', fontSize: 15, fontWeight: 500 }}>→ Embassy of Japan in India</a>
            <a href="http://www.jlpt.jp/e/guideline/results_online.html" target="_blank" rel="noreferrer" style={{ color: 'var(--red)', fontSize: 15, fontWeight: 500 }}>→ Online JLPT Test Results</a>
          </div>
        </div>
      </section>

      <CTABand
        title="Prepare for Your JLPT with TIJL"
        desc="Expert coaching for all 5 JLPT levels. Start preparing today."
        btn1={{ label: 'Enrol Now', href: '/registration' }}
        btn2={{ label: 'View Fees', href: '/fees' }}
      />
    </>
  )
}
