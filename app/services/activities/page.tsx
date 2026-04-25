import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'

export const metadata = { title: 'Extra Activities | TIJL' }

export default function ActivitiesPage() {
  return (
    <>
      <Breadcrumb title="Extra Activities" items={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Extra Activities' }]} />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Beyond the Classroom</span>
            <h2>Cultural & Extra-Curricular Activities</h2>
            <div className="divider" />
            <p>At TIJL, learning Japanese goes beyond grammar and vocabulary. We immerse students in Japanese culture.</p>
          </div>

          <div className="activities-grid">
            {[
              ['🎌', 'Japanese Speech Contest', 'Students participate in speech contests to build confidence and real-world speaking skills.'],
              ['✍️', 'Calligraphy (Shodō)', 'Learn the beautiful art of Japanese calligraphy, writing kanji with brush and ink.'],
              ['🎎', 'Cultural Festivals', 'Celebrate Japanese festivals like Tanabata, Obon, and New Year with traditional activities.'],
              ['🐦', 'Origami Workshops', 'Explore the art of paper folding — a meditative Japanese craft with centuries of history.'],
              ['🍱', 'Food Culture Sessions', 'Discover Japanese cuisine, dining etiquette, and the cultural significance of food.'],
              ['🎬', 'Anime & J-Drama Club', 'Watch and discuss Japanese media to improve listening comprehension in a fun setting.'],
            ].map(([icon, title, desc], i) => (
              <div key={i} className="activity-card">
                <div className="activity-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/registration" className="btn-primary">Join TIJL Today</Link>
          </div>
        </div>
      </section>
    </>
  )
}
