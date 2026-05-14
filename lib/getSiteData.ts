import { readFileSync } from 'fs'
import path from 'path'

export function getSiteData() {
  return JSON.parse(readFileSync(path.join(process.cwd(), 'data', 'site.json'), 'utf-8'))
}
