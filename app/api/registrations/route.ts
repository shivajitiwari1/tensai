import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'registrations.json')
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'registrations')

function readData() {
  try { return JSON.parse(readFileSync(DATA_FILE, 'utf-8')) } catch { return [] }
}

function writeData(data: unknown[]) {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
}

async function saveFile(file: File, folder: string, prefix: string): Promise<string> {
  const ext = file.name.split('.').pop() ?? 'bin'
  const filename = `${prefix}-${Date.now()}.${ext}`
  const dest = path.join(folder, filename)
  const buffer = Buffer.from(await file.arrayBuffer())
  writeFileSync(dest, buffer)
  return `/uploads/registrations/${filename}`
}

export async function GET() {
  return NextResponse.json(readData())
}

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData()

    const firstName   = fd.get('firstName')?.toString() ?? ''
    const lastName    = fd.get('lastName')?.toString()  ?? ''
    const email       = fd.get('email')?.toString()     ?? ''
    const phone       = fd.get('phone')?.toString()     ?? ''
    const courseLevel = fd.get('courseLevel')?.toString() ?? ''

    if (!firstName || !lastName || !email || !phone || !courseLevel) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const id = Date.now().toString()
    const folder = path.join(UPLOAD_DIR, id)
    mkdirSync(folder, { recursive: true })

    const photoFile   = fd.get('photo')   as File | null
    const eduDocFile  = fd.get('eduDoc')  as File | null
    const idProofFile = fd.get('idProof') as File | null

    const photoPath   = photoFile?.size   ? await saveFile(photoFile,   folder, 'photo')   : null
    const eduDocPath  = eduDocFile?.size  ? await saveFile(eduDocFile,  folder, 'edu')     : null
    const idProofPath = idProofFile?.size ? await saveFile(idProofFile, folder, 'id')      : null

    const entry = {
      id,
      firstName,
      lastName,
      dob:              fd.get('dob')?.toString()            ?? '',
      gender:           fd.get('gender')?.toString()         ?? '',
      email,
      phone,
      whatsapp:         fd.get('whatsapp')?.toString()       ?? '',
      address:          fd.get('address')?.toString()         ?? '',
      city:             fd.get('city')?.toString()            ?? '',
      state:            fd.get('state')?.toString()           ?? '',
      courseLevel,
      educationQual:    fd.get('educationQual')?.toString()  ?? '',
      howHeard:         fd.get('howHeard')?.toString()        ?? '',
      message:          fd.get('message')?.toString()         ?? '',
      photoPath,
      eduDocPath,
      idProofPath,
      createdAt: new Date().toISOString(),
      status: 'pending',
    }

    const data = readData()
    data.push(entry)
    writeData(data)

    return NextResponse.json({ success: true, id }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
