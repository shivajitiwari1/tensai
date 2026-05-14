import { readFileSync, writeFileSync } from 'fs'
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

export interface SiteData {
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

const DATA_FILE = path.join(process.cwd(), 'data', 'site.json')
const KV_KEY = 'site_data'

// Upstash Redis REST API — no npm package needed
async function kvGet<T>(key: string): Promise<T | null> {
  const url = process.env.KV_REST_API_URL
  const token = process.env.KV_REST_API_TOKEN
  if (!url || !token) return null
  try {
    const res = await fetch(`${url}/get/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    })
    const { result } = await res.json()
    if (!result) return null
    return JSON.parse(result) as T
  } catch {
    return null
  }
}

async function kvSet(key: string, value: unknown): Promise<void> {
  const url = process.env.KV_REST_API_URL
  const token = process.env.KV_REST_API_TOKEN
  if (!url || !token) throw new Error('KV_REST_API_URL / KV_REST_API_TOKEN not set')
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(['SET', key, JSON.stringify(value)]),
  })
  if (!res.ok) throw new Error(`KV write failed: ${res.status}`)
}

export async function getSiteData(): Promise<SiteData> {
  const kvData = await kvGet<SiteData>(KV_KEY)
  if (kvData) return kvData
  return JSON.parse(readFileSync(DATA_FILE, 'utf-8'))
}

export async function setSiteData(data: SiteData): Promise<void> {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    await kvSet(KV_KEY, data)
  } else {
    // Local dev fallback — write directly to file
    writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
  }
}
