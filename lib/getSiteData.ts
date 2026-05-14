import { readFileSync } from 'fs'
import path from 'path'

interface Slide {
  tag: string; title: string; desc: string; bg: string
  btn1: { label: string; href: string }
  btn2: { label: string; href: string }
}
interface Stat { num: string; sup: string; label: string }
interface Highlight { icon: string; title: string; desc: string; link: string }
interface Course { id: string; title: string; badge: string; desc: string; kanji: string; tag: string; href: string }
interface Service { icon: string; title: string; desc: string; href: string }
interface Fee { title: string; level: string; price: string; duration: string; popular: boolean; features: string[] }
interface FeeBreakdown { label: string; amount: string }
interface BatchTiming { description: string; batch1: string; batch2: string; batch3: string }
interface JlptLevel { level: string; name: string; desc: string; highlight: boolean }
interface JapaneseLevel { badge: string; title: string; desc: string }
interface Announcement { id: string; text: string; link: string; linkText: string; active: boolean; type: string }
interface Contact { address: string; phone: string; email: string; hours: string; mapEmbed: string }

interface SiteData {
  slides: Slide[]
  stats: Stat[]
  highlights: Highlight[]
  courses: Course[]
  services: Service[]
  whyPoints: string[]
  fees: Fee[]
  feeBreakdown: FeeBreakdown[]
  batchTimings: BatchTiming[]
  jlptLevels: JlptLevel[]
  japaneseLevels: JapaneseLevel[]
  placementSectors: string[]
  contact: Contact
  announcements: Announcement[]
}

export function getSiteData(): SiteData {
  return JSON.parse(readFileSync(path.join(process.cwd(), 'data', 'site.json'), 'utf-8'))
}
