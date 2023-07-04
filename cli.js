#!/usr/bin/env node

import child_process from 'child_process'

const tapeArgs = process.argv.slice(2)

child_process.execSync(`tape ${tapeArgs.join(' ')} | tap-pretty`, {
  stdio: ['pipe', process.stdout, process.stderr],
})