import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getSiteData, setSiteData, SiteData } from '@/lib/getSiteData'

function isAuthenticated() {
  const cookieStore = cookies()
  return !!cookieStore.get('admin_token')?.value
}

// GET /api/admin/site?section=slides
export async function GET(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const section = req.nextUrl.searchParams.get('section')
  const site = await getSiteData()
  if (section) return NextResponse.json((site as Record<string, unknown>)[section] ?? null)
  return NextResponse.json(site)
}

// PUT /api/admin/site?section=slides
export async function PUT(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const section = req.nextUrl.searchParams.get('section')
    const body = await req.json()
    const site = await getSiteData()
    if (section) {
      (site as Record<string, unknown>)[section] = body
    } else {
      Object.assign(site, body)
    }
    await setSiteData(site as SiteData)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Site save error:', err)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}
