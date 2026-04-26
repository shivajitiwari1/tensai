import type { Metadata } from 'next'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'

export const metadata: Metadata = {
  title: 'Tensai Japanese Language Institute Noida | TIJL',
  description: 'TIJL is a highly reputed Japanese language training institute in Delhi NCR, helping students achieve JLPT certification and career success in Japanese companies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}
