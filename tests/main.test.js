import test from '../boxtape.js'
import sinon from 'sinon'

const beforeEachSpy = sinon.spy()
const afterEachSpy = sinon.spy()

test.beforeEach(async (t) => {
  beforeEachSpy()
})

test.afterEach(async (t) => {
  afterEachSpy()
})

test('run 1', async (t) => {
  t.end()
})

test('run 2', async (t) => {
  t.end()
})

test('run final', async (t) => {
  t.equal(beforeEachSpy.callCount, 3, 'beforeEach callCount')
  t.equal(afterEachSpy.callCount, 2, 'afterEach callCount')
})
