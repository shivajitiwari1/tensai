'use client'
import { useState } from 'react'
import Breadcrumb from '@/components/Breadcrumb'

const galleryImages = [
  { src: 'https://tensai.org.in/wp-content/uploads/2017/08/About-Us.jpg', alt: 'About Us' },
  { src: 'https://tensai.org.in/wp-content/uploads/2016/10/Japanese-Education.jpg', alt: 'Japanese Education' },
  { src: 'https://tensai.org.in/wp-content/uploads/2016/10/JLPT-FINAL.jpg', alt: 'JLPT' },
  { src: 'https://tensai.org.in/wp-content/uploads/2017/03/placement.jpg', alt: 'Placement' },
  { src: 'https://tensai.org.in/wp-content/uploads/2017/08/director-ten.jpg', alt: 'Director' },
  { src: 'https://tensai.org.in/wp-content/uploads/2019/04/cropped-Tensai-Logo-copy-2.jpg', alt: 'Tensai Logo' },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <Breadcrumb title="Gallery" items={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Institute</span>
            <h2>Gallery</h2>
            <div className="divider" />
            <p>A glimpse into life at Tensai Japanese Language Institute.</p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => setLightbox(img.src)}>
                <img src={img.src} alt={img.alt} />
                <div className="gallery-overlay"><span>🔍</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
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
