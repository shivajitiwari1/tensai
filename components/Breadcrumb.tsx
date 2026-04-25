import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ title, items }: { title: string; items: BreadcrumbItem[] }) {
  return (
    <div className="breadcrumb-bar">
      <div className="breadcrumb-inner">
        <h1>{title}</h1>
        <nav>
          {items.map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {i > 0 && <span>›</span>}
              {item.href ? (
                <Link href={item.href} style={{ color: '#ffd', textDecoration: 'none' }}>{item.label}</Link>
              ) : (
                <span style={{ opacity: 0.7 }}>{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  )
}
