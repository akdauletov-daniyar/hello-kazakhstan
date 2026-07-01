/* =========================================================================
   Generate responsive WebP variants from the source JPGs.
   Source (full-res originals, NOT deployed): /assets/images/*.jpg
   Output (deployed):                          /public/images/<name>-<w>.webp
   Run with: npm run images
   ========================================================================= */

import { readdir, mkdir } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = fileURLToPath(new URL('..', import.meta.url))
const SRC = join(root, 'assets', 'images')
const OUT = join(root, 'public', 'images')

// widths cover phone → retina desktop / full-bleed hero
const WIDTHS = [480, 800, 1280, 1920]
const QUALITY = 72

await mkdir(OUT, { recursive: true })

const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f))
let totalOut = 0

for (const file of files) {
  const { name } = parse(file)
  const input = join(SRC, file)
  const meta = await sharp(input).metadata()

  for (const w of WIDTHS) {
    // never upscale beyond the original width
    if (meta.width && w > meta.width) continue
    const outPath = join(OUT, `${name}-${w}.webp`)
    const info = await sharp(input)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(outPath)
    totalOut += info.size
  }
  console.log(`✓ ${file}`)
}

console.log(
  `\nDone: ${files.length} source images → WebP. Total output: ${(totalOut / 1024 / 1024).toFixed(2)} MB`,
)
