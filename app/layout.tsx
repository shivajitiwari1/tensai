import type { Metadata } from 'next'
import './globals.css'
import Topbar from '@/components/Topbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tensai Japanese Language Institute Noida | TIJL',
  description: 'TIJL is a highly reputed Japanese language training institute in Delhi NCR, helping students achieve JLPT certification and career success in Japanese companies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
