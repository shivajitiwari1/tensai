'use client'
import { usePathname } from 'next/navigation'
import Topbar from '@/components/Topbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsTicker from '@/components/NewsTicker'
export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <Topbar />
      <NewsTicker />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
