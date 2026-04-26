import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { cookies } from 'next/headers'

const DATA_FILE = path.join(process.cwd(), 'data', 'registrations.json')

function isAuthenticated() {
  const cookieStore = cookies()
  return !!cookieStore.get('admin_token')?.value
}

function readData() {
  try { return JSON.parse(readFileSync(DATA_FILE, 'utf-8')) } catch { return [] }
}
function writeData(d: unknown[]) { writeFileSync(DATA_FILE, JSON.stringify(d, null, 2), 'utf-8') }

export async function GET() {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const data = readData()
  return NextResponse.json(data.reverse()) // newest first
}

export async function PATCH(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id, status } = await req.json()
  const data = readData()
  const idx = data.findIndex((r: { id: string }) => r.id === id)
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  data[idx].status = status
  writeData(data)
  return NextResponse.json({ success: true })
}

export async function DELETE(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await req.json()
  const data = readData()
  const filtered = data.filter((r: { id: string }) => r.id !== id)
  writeData(filtered)
  return NextResponse.json({ success: true })
}
