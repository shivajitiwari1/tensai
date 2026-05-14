import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { cookies } from 'next/headers'

const DATA_FILE = path.join(process.cwd(), 'data', 'site.json')

function isAuthenticated() {
  const cookieStore = cookies()
  return !!cookieStore.get('admin_token')?.value
}

function readSite() {
  return JSON.parse(readFileSync(DATA_FILE, 'utf-8'))
}

function writeSite(data: unknown) {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
}

// GET /api/admin/site?section=stats
export async function GET(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const section = req.nextUrl.searchParams.get('section')
  const site = readSite()
  if (section) return NextResponse.json(site[section] ?? null)
  return NextResponse.json(site)
}

// PUT /api/admin/site?section=stats — update a specific section
export async function PUT(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const section = req.nextUrl.searchParams.get('section')
    const body = await req.json()
    const site = readSite()
    if (section) {
      site[section] = body
    } else {
      // full site update
      Object.assign(site, body)
    }
    writeSite(site)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
}
