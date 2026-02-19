import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, '..', 'src', 'assets', 'myphoto.png');
const destDir = resolve(__dirname, '..', 'public');
if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
const dest = resolve(destDir, 'favicon.png');

try {
  copyFileSync(src, dest);
  console.log(`Copied ${src} -> ${dest}`);
} catch (err) {
  console.error('Failed to copy favicon:', err.message);
  process.exitCode = 1;
}
