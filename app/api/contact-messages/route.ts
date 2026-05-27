import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'

const DATA_FILE = path.join(process.cwd(), 'data', 'contact-messages.json')

const SMTP_CONFIG = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'tensaieducation@gmail.com',
    pass: 'dldq woiw xoxv vdhv',
  },
  tls: { rejectUnauthorized: false },
}

const NOTIFY_EMAIL = 'tensaieducation@gmail.com'

function readData() {
  try { return JSON.parse(readFileSync(DATA_FILE, 'utf-8')) } catch { return [] }
}

function tryWriteData(data: unknown[]) {
  try { writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8') }
  catch (e) { console.warn('Data write skipped (read-only FS):', e) }
}

async function sendContactEmails(entry: {
  id: string; name: string; email: string
  phone?: string; subject?: string; message: string; createdAt: string
}) {
  const transporter = nodemailer.createTransport(SMTP_CONFIG)

  const adminHtml = `
    <h2 style="color:#1a3c6e;">New Contact Message — Tensai Institute of Japanese Language</h2>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;width:100%;max-width:600px;">
      <tr style="background:#f0f4ff;"><th colspan="2" style="text-align:left;padding:10px;">Contact Details</th></tr>
      <tr><td><strong>Full Name</strong></td><td>${entry.name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${entry.email}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${entry.phone || '—'}</td></tr>
      <tr><td><strong>Subject</strong></td><td>${entry.subject || '—'}</td></tr>
      <tr style="background:#f0f4ff;"><th colspan="2" style="text-align:left;padding:10px;">Message</th></tr>
      <tr><td colspan="2" style="white-space:pre-wrap;">${entry.message}</td></tr>
      <tr style="background:#f0f4ff;"><th colspan="2" style="text-align:left;padding:10px;">Meta</th></tr>
      <tr><td><strong>Message ID</strong></td><td>${entry.id}</td></tr>
      <tr><td><strong>Received At</strong></td><td>${entry.createdAt}</td></tr>
    </table>
  `

  const userHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#222;">
      <div style="background:#1a3c6e;padding:24px 32px;border-radius:6px 6px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:22px;">Tensai Institute of Japanese Language</h1>
      </div>
      <div style="border:1px solid #dde3f0;border-top:none;padding:28px 32px;border-radius:0 0 6px 6px;">
        <p style="font-size:16px;">Dear <strong>${entry.name}</strong>,</p>
        <p>Thank you for reaching out to <strong>Tensai Institute of Japanese Language</strong>. We have received your message and will get back to you as soon as possible.</p>
        <table border="0" cellpadding="6" cellspacing="0" style="margin:16px 0;font-size:14px;">
          <tr><td style="color:#555;padding-right:16px;">Subject</td><td><strong>${entry.subject || '(No subject)'}</strong></td></tr>
          <tr><td style="color:#555;padding-right:16px;">Received On</td><td><strong>${new Date(entry.createdAt).toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' })}</strong></td></tr>
        </table>
        <p>Your message:</p>
        <blockquote style="border-left:4px solid #1a3c6e;margin:0;padding:10px 16px;background:#f5f7ff;font-size:14px;white-space:pre-wrap;">${entry.message}</blockquote>
        <p style="margin-top:20px;">Our team typically responds within 1–2 business days. You can also reach us directly at:</p>
        <ul style="font-size:14px;line-height:1.8;">
          <li>Email: <a href="mailto:tensaieducation@gmail.com">tensaieducation@gmail.com</a></li>
          <li>Phone: <a href="tel:+917289026558">+91-7289026558</a></li>
        </ul>
        <p style="margin-top:24px;">Warm regards,<br/><strong>Team Tensai</strong><br/>Tensai Institute of Japanese Language</p>
      </div>
      <p style="font-size:11px;color:#999;text-align:center;margin-top:12px;">This is an automated reply. Please do not respond to this email.</p>
    </div>
  `

  await Promise.all([
    transporter.sendMail({
      from: `"Tensai Institute of Japanese Language" <${SMTP_CONFIG.auth.user}>`,
      to: NOTIFY_EMAIL,
      subject: `New Contact Message: ${entry.name}${entry.subject ? ` — ${entry.subject}` : ''}`,
      html: adminHtml,
    }),
    transporter.sendMail({
      from: `"Tensai Institute of Japanese Language" <${SMTP_CONFIG.auth.user}>`,
      to: entry.email,
      subject: `We received your message — Tensai Institute of Japanese Language`,
      html: userHtml,
    }),
  ])
}

export async function GET() {
  return NextResponse.json(readData())
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    const entry = {
      id:        Date.now().toString(),
      name:      body.name,
      email:     body.email,
      phone:     body.phone   ?? '',
      subject:   body.subject ?? '',
      message:   body.message,
      createdAt: new Date().toISOString(),
      read:      false,
    }

    // Try to persist locally (silently skipped on Vercel read-only FS)
    const data = readData()
    data.push(entry)
    tryWriteData(data)

    // Await emails before returning — Vercel kills background tasks after response is sent
    try {
      await sendContactEmails(entry)
    } catch (err) {
      console.error('Contact email failed:', err)
    }

    return NextResponse.json({ success: true, id: entry.id }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
