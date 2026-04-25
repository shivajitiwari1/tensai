import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'contact-messages.json')

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

// GET /api/contact-messages
export async function GET() {
  const data = readData()
  return NextResponse.json(data)
}

// POST /api/contact-messages
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    const data = readData()
    const newEntry = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      read: false,
    }
    data.push(newEntry)
    writeData(data)

    return NextResponse.json({ success: true, id: newEntry.id }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
