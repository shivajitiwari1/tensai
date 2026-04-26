import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { cookies } from 'next/headers'

const DATA_FILE = path.join(process.cwd(), 'data', 'contact-messages.json')

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
  return NextResponse.json(readData().reverse())
}

export async function PATCH(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id, read } = await req.json()
  const data = readData()
  const idx = data.findIndex((m: { id: string }) => m.id === id)
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  data[idx].read = read
  writeData(data)
  return NextResponse.json({ success: true })
}

export async function DELETE(req: NextRequest) {
  if (!isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await req.json()
  const data = readData()
  writeData(data.filter((m: { id: string }) => m.id !== id))
  return NextResponse.json({ success: true })
}
