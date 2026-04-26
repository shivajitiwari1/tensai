import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'site.json')

// GET /api/announcements — only active ones, for the public ticker
export async function GET() {
  try {
    const site = JSON.parse(readFileSync(DATA_FILE, 'utf-8'))
    const active = (site.announcements || []).filter((a: { active: boolean }) => a.active)
    return NextResponse.json(active)
  } catch {
    return NextResponse.json([])
  }
}
