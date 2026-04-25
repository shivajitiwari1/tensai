import Link from 'next/link'

interface CTABandProps {
  title: string
  desc: string
  btn1: { label: string; href: string }
  btn2: { label: string; href: string }
}

export default function CTABand({ title, desc, btn1, btn2 }: CTABandProps) {
  return (
    <div className="cta-band">
      <div className="container">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="cta-band-btns">
          <Link href={btn1.href} className="btn-white">{btn1.label}</Link>
          <Link href={btn2.href} className="btn-outline-white">{btn2.label}</Link>
        </div>
      </div>
    </div>
  )
}
