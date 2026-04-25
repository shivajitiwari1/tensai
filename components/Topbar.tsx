import Link from 'next/link'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-contacts">
          <Link href="tel:+917289026558">📞 +91-7289026558</Link>
          <Link href="mailto:japanindia1947@gmail.com">✉ japanindia1947@gmail.com</Link>
        </div>
        <div className="topbar-notice">
          <span>🎌 New Batch Starting Soon</span>
          <Link href="/registration">Register Now →</Link>
        </div>
      </div>
    </div>
  )
}
