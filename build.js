
import fs from 'fs'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const tapeTypingsPath = path.resolve(__dirname, 'node_modules/@types/tape/index.d.ts')
const tapeTypings = fs.readFileSync(tapeTypingsPath, {encoding: 'utf-8'})

const additionalTypings = `
declare namespace tape {
  export function beforeEach(fn: tape.TestCase): void;
  export function afterEach(fn: tape.TestCase): void;
}
`

const finalTypings = tapeTypings + additionalTypings

fs.writeFileSync('./boxtape.d.ts', finalTypings, {encoding: 'utf-8'})
