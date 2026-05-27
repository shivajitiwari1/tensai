import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'

const DATA_FILE  = path.join(process.cwd(), 'data', 'registrations.json')
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'registrations')

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

// Testing: shivajitiwari@gmail.com — change to tensaieducation@gmail.com after verification
const NOTIFY_EMAIL = 'shivajitiwari@gmail.com'

function readData() {
  try { return JSON.parse(readFileSync(DATA_FILE, 'utf-8')) } catch { return [] }
}

function tryWriteData(data: unknown[]) {
  try { writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8') }
  catch (e) { console.warn('Data write skipped (read-only FS):', e) }
}

function trySaveBuffer(buffer: Buffer, filename: string, id: string, prefix: string): string | null {
  try {
    const folder = path.join(UPLOAD_DIR, id)
    mkdirSync(folder, { recursive: true })
    const ext     = filename.split('.').pop() ?? 'bin'
    const outName = `${prefix}-${Date.now()}.${ext}`
    writeFileSync(path.join(folder, outName), buffer)
    return `/uploads/registrations/${id}/${outName}`
  } catch {
    return null
  }
}

async function sendRegistrationEmail(
  entry: Record<string, string | null>,
  photoBuffer: Buffer | null, photoFilename: string | null,
  eduBuffer:   Buffer | null, eduFilename:   string | null,
  idBuffer:    Buffer | null, idFilename:    string | null,
) {
  const transporter = nodemailer.createTransport(SMTP_CONFIG)

  const attachments: nodemailer.SendMailOptions['attachments'] = []
  if (photoBuffer && photoFilename) attachments.push({ filename: photoFilename, content: photoBuffer })
  if (eduBuffer   && eduFilename)   attachments.push({ filename: eduFilename,   content: eduBuffer })
  if (idBuffer    && idFilename)    attachments.push({ filename: idFilename,    content: idBuffer })

  const adminHtml = `
    <h2 style="color:#1a3c6e;">New Student Registration — Tensai Institute of Japanese Language</h2>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;width:100%;max-width:600px;">
      <tr style="background:#f0f4ff;"><th colspan="2" style="text-align:left;padding:10px;">Personal Information</th></tr>
      <tr><td><strong>Full Name</strong></td><td>${entry.firstName} ${entry.lastName}</td></tr>
      <tr><td><strong>Date of Birth</strong></td><td>${entry.dob || '—'}</td></tr>
      <tr><td><strong>Gender</strong></td><td>${entry.gender || '—'}</td></tr>
      <tr><td><strong>Email</strong></td><td>${entry.email}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${entry.phone}</td></tr>
      <tr><td><strong>WhatsApp</strong></td><td>${entry.whatsapp || '—'}</td></tr>
      <tr><td><strong>City</strong></td><td>${entry.city || '—'}</td></tr>
      <tr><td><strong>Address</strong></td><td>${entry.address || '—'}</td></tr>
      <tr style="background:#f0f4ff;"><th colspan="2" style="text-align:left;padding:10px;">Academic Details</th></tr>
      <tr><td><strong>Education Qualification</strong></td><td>${entry.educationQual || '—'}</td></tr>
      <tr><td><strong>Course / Level</strong></td><td>${entry.courseLevel}</td></tr>
      <tr style="background:#f0f4ff;"><th colspan="2" style="text-align:left;padding:10px;">Other</th></tr>
      <tr><td><strong>How Did You Hear About Us?</strong></td><td>${entry.howHeard || '—'}</td></tr>
      <tr><td><strong>Additional Message</strong></td><td>${entry.message || '—'}</td></tr>
      <tr><td><strong>Registration ID</strong></td><td>${entry.id}</td></tr>
      <tr><td><strong>Submitted At</strong></td><td>${entry.createdAt}</td></tr>
    </table>
    <p style="margin-top:16px;font-size:12px;color:#666;">
      Attached: Passport Size Photo${eduBuffer ? ', Education Certificate' : ''}${idBuffer ? ', ID Proof' : ''}
    </p>
  `

  const studentHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#222;">
      <div style="background:#1a3c6e;padding:24px 32px;border-radius:6px 6px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:22px;">Tensai Institute of Japanese Language</h1>
      </div>
      <div style="border:1px solid #dde3f0;border-top:none;padding:28px 32px;border-radius:0 0 6px 6px;">
        <p style="font-size:16px;">Dear <strong>${entry.firstName} ${entry.lastName}</strong>,</p>
        <p>Thank you for registering with <strong>Tensai Institute of Japanese Language</strong>! We have successfully received your application.</p>
        <table border="0" cellpadding="6" cellspacing="0" style="margin:16px 0;font-size:14px;">
          <tr><td style="color:#555;padding-right:16px;">Registration ID</td><td><strong>${entry.id}</strong></td></tr>
          <tr><td style="color:#555;padding-right:16px;">Course Applied</td><td><strong>${entry.courseLevel}</strong></td></tr>
          <tr><td style="color:#555;padding-right:16px;">Submitted On</td><td><strong>${new Date(entry.createdAt!).toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' })}</strong></td></tr>
        </table>
        <p>Our team will review your application and get in touch with you shortly to confirm your batch details and next steps.</p>
        <p>If you have any questions in the meantime, feel free to reach us at:</p>
        <ul style="font-size:14px;line-height:1.8;">
          <li>Email: <a href="mailto:tensaieducation@gmail.com">tensaieducation@gmail.com</a></li>
          <li>Phone: <a href="tel:+917289026558">+91-7289026558</a></li>
        </ul>
        <p style="margin-top:24px;">We look forward to welcoming you to our Japanese language family!</p>
        <p>Warm regards,<br/><strong>Team Tensai</strong><br/>Tensai Institute of Japanese Language</p>
      </div>
      <p style="font-size:11px;color:#999;text-align:center;margin-top:12px;">This is an automated confirmation. Please do not reply to this email.</p>
    </div>
  `

  await Promise.all([
    transporter.sendMail({
      from: `"Tensai Institute of Japanese Language" <${SMTP_CONFIG.auth.user}>`,
      to: NOTIFY_EMAIL,
      bcc: 'ssharan8@gmail.com',
      subject: `New Registration: ${entry.firstName} ${entry.lastName} — ${entry.courseLevel}`,
      html: adminHtml,
      attachments,
    }),
    transporter.sendMail({
      from: `"Tensai Institute of Japanese Language" <${SMTP_CONFIG.auth.user}>`,
      to: entry.email!,
      subject: `Registration Received — ${entry.courseLevel} | Tensai Institute of Japanese Language`,
      html: studentHtml,
    }),
  ])
}

export async function GET() {
  return NextResponse.json(readData())
}

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData()

    const firstName   = fd.get('firstName')?.toString()   ?? ''
    const lastName    = fd.get('lastName')?.toString()    ?? ''
    const email       = fd.get('email')?.toString()       ?? ''
    const phone       = fd.get('phone')?.toString()       ?? ''
    const courseLevel = fd.get('courseLevel')?.toString() ?? ''

    if (!firstName || !lastName || !email || !phone || !courseLevel) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const id = Date.now().toString()

    const photoFile   = fd.get('photo')   as File | null
    const eduDocFile  = fd.get('eduDoc')  as File | null
    const idProofFile = fd.get('idProof') as File | null

    // Read into memory first — works on both local and Vercel
    const photoBuffer = photoFile?.size   ? Buffer.from(await photoFile.arrayBuffer())   : null
    const eduBuffer   = eduDocFile?.size  ? Buffer.from(await eduDocFile.arrayBuffer())  : null
    const idBuffer    = idProofFile?.size ? Buffer.from(await idProofFile.arrayBuffer()) : null

    // Try to save files to disk (silently skipped on Vercel read-only FS)
    const photoPath   = photoBuffer ? trySaveBuffer(photoBuffer, photoFile!.name,   id, 'photo') : null
    const eduDocPath  = eduBuffer   ? trySaveBuffer(eduBuffer,   eduDocFile!.name,  id, 'edu')   : null
    const idProofPath = idBuffer    ? trySaveBuffer(idBuffer,    idProofFile!.name, id, 'id')    : null

    const entry = {
      id,
      firstName,
      lastName,
      dob:           fd.get('dob')?.toString()           ?? '',
      gender:        fd.get('gender')?.toString()        ?? '',
      email,
      phone,
      whatsapp:      fd.get('whatsapp')?.toString()      ?? '',
      address:       fd.get('address')?.toString()       ?? '',
      city:          fd.get('city')?.toString()          ?? '',
      state:         fd.get('state')?.toString()         ?? '',
      courseLevel,
      educationQual: fd.get('educationQual')?.toString() ?? '',
      howHeard:      fd.get('howHeard')?.toString()      ?? '',
      message:       fd.get('message')?.toString()       ?? '',
      photoPath,
      eduDocPath,
      idProofPath,
      createdAt: new Date().toISOString(),
      status: 'pending',
    }

    // Try to persist locally (silently skipped on Vercel read-only FS)
    const data = readData()
    data.push(entry)
    tryWriteData(data)

    // Send emails — always works (outbound network, not filesystem)
    sendRegistrationEmail(
      entry,
      photoBuffer, photoFile?.name ?? null,
      eduBuffer,   eduDocFile?.name ?? null,
      idBuffer,    idProofFile?.name ?? null,
    ).catch(err => console.error('Email send failed:', err))

    return NextResponse.json({ success: true, id }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
