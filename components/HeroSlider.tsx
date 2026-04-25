'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Slide {
  tag: string
  title: string
  desc: string
  bg: string
  btn1: { label: string; href: string }
  btn2: { label: string; href: string }
}

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCur(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const go = (n: number) => setCur(((n % slides.length) + slides.length) % slides.length)

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: 520, background: '#1a0a0a' }}>
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
            opacity: i === cur ? 1 : 0, transition: 'opacity .9s ease'
          }}
        >
          <div style={{
            position: 'absolute', inset: 0, backgroundImage: `url(${slide.bg})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            transform: i === cur ? 'scale(1)' : 'scale(1.04)', transition: 'transform 6s ease'
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,0,0,.70) 40%, rgba(10,0,0,.20) 100%)' }} />
          <div style={{ position: 'relative', maxWidth: 1200, margin: 'auto', padding: '0 48px', color: '#fff', width: '100%' }}>
            <span style={{ display: 'inline-block', background: 'var(--red)', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 4, marginBottom: 18 }}>
              {slide.tag}
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 700, lineHeight: 1.15, marginBottom: 16, maxWidth: 560 }}>
              {slide.title}
            </h1>
            <p style={{ fontSize: 16, opacity: .85, maxWidth: 440, marginBottom: 30 }}>{slide.desc}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href={slide.btn1.href} className="btn-primary">{slide.btn1.label}</Link>
              <Link href={slide.btn2.href} className="btn-outline">{slide.btn2.label}</Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() => go(cur - 1)}
        style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,.35)', border: '1.5px solid rgba(255,255,255,.25)', color: '#fff', fontSize: 28, width: 48, height: 48, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', left: 20, zIndex: 10 }}
      >‹</button>
      <button
        onClick={() => go(cur + 1)}
        style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,.35)', border: '1.5px solid rgba(255,255,255,.25)', color: '#fff', fontSize: 28, width: 48, height: 48, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', right: 20, zIndex: 10 }}
      >›</button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => go(i)}
            style={{
              width: i === cur ? 10 : 8, height: i === cur ? 10 : 8,
              borderRadius: '50%', background: i === cur ? 'var(--red)' : 'rgba(255,255,255,.4)',
              cursor: 'pointer', transition: 'all .3s', transform: i === cur ? 'scale(1.3)' : 'scale(1)'
            }}
          />
        ))}
      </div>
    </div>
  )
}
