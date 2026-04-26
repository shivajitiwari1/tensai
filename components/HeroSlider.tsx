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
    <div className="hero">
      {slides.map((slide, i) => (
        <div key={i} className={`hero-slide${i === cur ? ' active' : ''}`}>
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          <div className="hero-slide-overlay" />
          <div className="hero-content">
            <span className="hero-tag">{slide.tag}</span>
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-desc">{slide.desc}</p>
            <div className="hero-btns">
              <Link href={slide.btn1.href} className="btn-primary">{slide.btn1.label}</Link>
              <Link href={slide.btn2.href} className="btn-outline">{slide.btn2.label}</Link>
            </div>
          </div>
        </div>
      ))}

      <button className="hero-arrow hero-arrow-left" onClick={() => go(cur - 1)} aria-label="Previous">‹</button>
      <button className="hero-arrow hero-arrow-right" onClick={() => go(cur + 1)} aria-label="Next">›</button>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`hero-dot${i === cur ? ' active' : ''}`}
            onClick={() => go(i)}
            role="button"
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
