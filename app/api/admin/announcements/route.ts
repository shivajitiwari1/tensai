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

// GET all announcements (admin - all, including inactive)
export async function GET() {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const site = readSite()
  return NextResponse.json(site.announcements || [])
}

// POST - create new announcement
export async function POST(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const site = readSite()
  const announcements = site.announcements || []
  const newItem = {
    id: Date.now().toString(),
    text: body.text || '',
    link: body.link || '',
    linkText: body.linkText || 'Read More',
    active: body.active !== false,
    type: body.type || 'batch',
  }
  announcements.push(newItem)
  site.announcements = announcements
  writeSite(site)
  return NextResponse.json({ success: true, item: newItem }, { status: 201 })
}

// PUT - update all announcements (full replace for reorder)
export async function PUT(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const site = readSite()
  site.announcements = body
  writeSite(site)
  return NextResponse.json({ success: true })
}

// PATCH - toggle active / update single item
export async function PATCH(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const site = readSite()
  const announcements = site.announcements || []
  const idx = announcements.findIndex((a: { id: string }) => a.id === body.id)
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  announcements[idx] = { ...announcements[idx], ...body }
  site.announcements = announcements
  writeSite(site)
  return NextResponse.json({ success: true })
}

// DELETE - remove announcement
export async function DELETE(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await req.json()
  const site = readSite()
  site.announcements = (site.announcements || []).filter((a: { id: string }) => a.id !== id)
  writeSite(site)
  return NextResponse.json({ success: true })
}
