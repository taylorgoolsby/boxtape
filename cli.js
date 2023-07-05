#!/usr/bin/env node

import child_process from 'child_process'

const tapeArgs = process.argv.slice(2)

try {
  child_process.execSync(`tape ${tapeArgs.join(' ')} | tap-pretty`, {
    stdio: ['pipe', process.stdout, process.stderr],
  })
} catch (err) {
  process.exit(1)
}
