'use client'
import { useState } from 'react'
import Breadcrumb from '@/components/Breadcrumb'

const galleryImages = [
  // ── Event photos ──
  { src: '/images/gallery/teachers-day-cake.jpg',    alt: "Teacher's Day Celebration", category: 'Events' },
  { src: '/images/gallery/teachers-day-group.jpg',   alt: "Teacher's Day Group Photo",  category: 'Events' },
  { src: '/images/gallery/birthday-cake.jpg',        alt: 'Tensai Birthday Celebration', category: 'Events' },
  { src: '/images/gallery/celebration-group.jpg',    alt: 'Institute Celebration',        category: 'Events' },
  // ── Cultural photos ──
  { src: '/images/gallery/kimono-duo.jpg',           alt: 'Students in Kimono',           category: 'Culture' },
  { src: '/images/gallery/kimono-solo.jpg',          alt: 'Student in Kimono',            category: 'Culture' },
  // ── Institute photos ──
  { src: '/images/about-us.jpg',         alt: 'About TIJL',         category: 'Institute' },
  { src: '/images/japanese-education.jpg', alt: 'Japanese Education', category: 'Institute' },
  { src: '/images/jlpt.jpg',             alt: 'JLPT Training',      category: 'Institute' },
  { src: '/images/placement.jpg',        alt: 'Placement Support',  category: 'Institute' },
  { src: '/images/director.jpg',         alt: 'Director',           category: 'Institute' },
]

const categories = ['All', 'Events', 'Culture', 'Institute']

export default function GalleryPage() {
  const [lightbox, setLightbox]   = useState<string | null>(null)
  const [active, setActive]       = useState('All')

  const filtered = active === 'All' ? galleryImages : galleryImages.filter(i => i.category === active)

  return (
    <>
      <Breadcrumb title="Gallery" items={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Institute</span>
            <h2>Gallery</h2>
            <div className="divider" />
            <p>A glimpse into life at Tensai Institute of Japanese Language.</p>
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '8px 22px', borderRadius: 24, border: '2px solid var(--red)',
                  background: active === cat ? 'var(--red)' : 'transparent',
                  color: active === cat ? '#fff' : 'var(--red)',
                  fontWeight: 600, cursor: 'pointer', fontSize: 14, transition: 'all .2s'
                }}
              >{cat}</button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => setLightbox(img.src)}>
                <img src={img.src} alt={img.alt} />
                <div className="gallery-overlay"><span>🔍</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ display: 'flex', position: 'fixed', inset: 0, background: 'rgba(0,0,0,.9)', zIndex: 1000, alignItems: 'center', justifyContent: 'center' }}
        >
          <span
            onClick={() => setLightbox(null)}
            style={{ position: 'absolute', top: 20, right: 24, color: '#fff', fontSize: 36, cursor: 'pointer', lineHeight: 1 }}
          >✕</span>
          <img src={lightbox} alt="Gallery" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 8, objectFit: 'contain' }} onClick={e => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}
