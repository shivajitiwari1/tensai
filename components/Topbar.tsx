import Link from 'next/link'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-contacts">
          <Link href="tel:+917289026558">📞 +91-7289026558</Link>
          <Link href="mailto:japanindia1947@gmail.com">✉ japanindia1947@gmail.com</Link>
        </div>
        <div className="topbar-contacts" style={{ opacity: 0.75, fontSize: 12 }}>
          <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
          <span>📍 Sector-2, Noida</span>
        </div>
      </div>
    </div>
  )
}
