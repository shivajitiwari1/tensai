import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import Link from 'next/link'
import { getSiteData } from '@/lib/getSiteData'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'JLPT Preparation | TIJL' }

export default function JLPTPage() {
  const { jlptLevels } = getSiteData()
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
              <div key={i} className="jlpt-card">
                <div className="level-label">{l.level}</div>
                <div className="level-name">{l.name}</div>
                <div className="level-desc">{l.desc}</div>
              </div>
            ))}
          </div>

          {/* JLPT level bar chart */}
          <div style={{ maxWidth: 780, margin: '0 auto 56px', background: '#1a1a2e', borderRadius: 20, padding: '40px 48px 32px', boxShadow: '0 24px 64px rgba(0,0,0,.28)' }}>
            <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 17, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 36, textAlign: 'center' }}>JLPT Level Progression</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 220 }}>
              {[
                { level: 'N5', h: '38%', label: 'Beginner',     color: '#e74c3c' },
                { level: 'N4', h: '52%', label: 'Elementary',   color: '#d44000' },
                { level: 'N3', h: '66%', label: 'Intermediate', color: '#c0392b' },
                { level: 'N2', h: '82%', label: 'Advanced',     color: '#a93226' },
                { level: 'N1', h: '100%', label: 'Proficient',  color: '#8e1e1e' },
              ].map(b => (
                <div key={b.level} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, height: '100%', justifyContent: 'flex-end' }}>
                  <span style={{ color: 'rgba(255,255,255,.9)', fontSize: 14, fontWeight: 700, letterSpacing: 0.5, marginBottom: 12, textAlign: 'center', lineHeight: 1.4 }}>{b.label}</span>
                  <div style={{ width: '100%', height: b.h, background: `linear-gradient(180deg, ${b.color}ee, ${b.color})`, borderRadius: '10px 10px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 -4px 20px ${b.color}88` }}>
                    <span style={{ color: '#fff', fontFamily: "'Playfair Display',serif", fontWeight: 800, fontSize: 32, textShadow: '0 2px 6px rgba(0,0,0,.4)' }}>{b.level}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ height: 3, background: 'rgba(255,255,255,.2)', marginTop: 0, borderRadius: 2 }} />
            <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 15, marginTop: 16, textAlign: 'center', fontWeight: 500 }}>N5 (easiest) → N1 (most advanced)</p>
          </div>

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
        desc="Expert training for all 5 JLPT levels. Start preparing today."
        btn1={{ label: 'Enrol Now', href: '/registration' }}
        btn2={{ label: 'View Fees', href: '/fees' }}
      />
    </>
  )
}
