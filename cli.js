#!/usr/bin/env node

import child_process from 'child_process'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const tapeArgs = process.argv.slice(2)
const binPath = path.resolve(__dirname, 'node_modules', '.bin')
const newPath = process.env.PATH + ':' + binPath
console.log('newPath', newPath)

try {
  child_process.execSync(`tape ${tapeArgs.join(' ')} | tap-pretty`, {
    stdio: ['pipe', process.stdout, process.stderr],
    env: {
      ...process.env,
      PATH: newPath
    }
  })
} catch (err) {
  process.exit(1)
}
