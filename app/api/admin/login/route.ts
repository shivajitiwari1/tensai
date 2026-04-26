import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import path from 'path'
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json()
    const adminData = JSON.parse(readFileSync(path.join(process.cwd(), 'data', 'admin.json'), 'utf-8'))

    if (username === adminData.username && password === adminData.password) {
      const token = Buffer.from(`${username}:${Date.now()}:${adminData.sessionSecret}`).toString('base64')
      const cookieStore = cookies()
      cookieStore.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 8, // 8 hours
        path: '/',
      })
      return NextResponse.json({ success: true })
    }
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
