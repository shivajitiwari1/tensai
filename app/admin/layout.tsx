import type { Metadata } from 'next'
import './admin.css'

export const metadata: Metadata = {
  title: 'Admin Panel | TIJL',
  robots: 'noindex,nofollow',
}

// This layout wraps all /admin/* pages.
// ConditionalLayout in root layout.tsx already suppresses
// Topbar / Header / Footer when pathname starts with /admin.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
