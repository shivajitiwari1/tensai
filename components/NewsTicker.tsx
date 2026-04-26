'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface Announcement {
  id: string
  text: string
  link: string
  linkText: string
  active: boolean
  type: 'batch' | 'exam' | 'achievement' | 'opportunity' | 'placement' | string
}

const TYPE_COLORS: Record<string, string> = {
  batch:       '#C0392B',
  exam:        '#1a5276',
  achievement: '#1e8449',
  opportunity: '#7d3c98',
  placement:   '#d4820a',
}

const TYPE_ICONS: Record<string, string> = {
  batch:       '🎌',
  exam:        '📝',
  achievement: '🏆',
  opportunity: '✈️',
  placement:   '💼',
}

export default function NewsTicker() {
  const [items, setItems] = useState<Announcement[]>([])
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    fetch('/api/announcements')
      .then(r => r.json())
      .then(d => { if (Array.isArray(d) && d.length) setItems(d) })
      .catch(() => {})
  }, [])

  const goTo = (idx: number, dir: 'up' | 'down') => {
    if (animating || items.length < 2) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 350)
  }

  const next = () => goTo((current + 1) % items.length, 'up')
  const prev = () => goTo((current - 1 + items.length) % items.length, 'down')

  // Auto-rotate
  useEffect(() => {
    if (items.length < 2 || paused) return
    timerRef.current = setTimeout(next, 3500)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, paused, items.length, animating])

  if (!items.length) return null

  const item = items[current]
  const color = TYPE_COLORS[item.type] || '#C0392B'

  return (
    <div
      className="news-ticker-bar"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* BREAKING label */}
      <div className="ticker-label" style={{ background: color }}>
        <span className="ticker-label-icon">📢</span>
        <span className="ticker-label-text">NEWS</span>
      </div>

      {/* Scrolling content */}
      <div className="ticker-content">
        <div className={`ticker-slide ticker-slide-${direction}${animating ? ' animating' : ''}`}>
          <span className="ticker-type-icon">{TYPE_ICONS[item.type] || '📌'}</span>
          <span className="ticker-text">{item.text}</span>
          {item.link && (
            <Link href={item.link} className="ticker-link">
              {item.linkText || 'Read More'} →
            </Link>
          )}
        </div>
      </div>

      {/* Dots */}
      {items.length > 1 && (
        <div className="ticker-dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`ticker-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i, i > current ? 'up' : 'down')}
              aria-label={`Announcement ${i + 1}`}
              style={{ background: i === current ? color : undefined }}
            />
          ))}
        </div>
      )}

      {/* Arrows */}
      {items.length > 1 && (
        <div className="ticker-arrows">
          <button className="ticker-arrow" onClick={prev} aria-label="Previous">‹</button>
          <button className="ticker-arrow" onClick={next} aria-label="Next">›</button>
        </div>
      )}

      {/* Progress bar */}
      {!paused && items.length > 1 && (
        <div className="ticker-progress" style={{ background: color }}>
          <div
            key={`${current}-${paused}`}
            className="ticker-progress-bar"
            style={{ animationDuration: '3.5s' }}
          />
        </div>
      )}
    </div>
  )
}
