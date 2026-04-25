import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'registrations.json')

function readData() {
  try {
    return JSON.parse(readFileSync(DATA_FILE, 'utf-8'))
  } catch {
    return []
  }
}

function writeData(data: unknown[]) {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
}

// GET /api/registrations — list all
export async function GET() {
  const data = readData()
  return NextResponse.json(data)
}

// POST /api/registrations — create new registration
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!body.firstName || !body.lastName || !body.email || !body.phone || !body.courseLevel) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const data = readData()
    const newEntry = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      status: 'pending', // pending | confirmed | cancelled
    }
    data.push(newEntry)
    writeData(data)

    return NextResponse.json({ success: true, id: newEntry.id }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
