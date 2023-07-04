import test from '../boxtape.js'
import sinon from 'sinon'

const spy = sinon.spy()

test.beforeEach(async (t) => {
  spy()
})

test.afterEach(async (t) => {
  spy()
})

test('run 1', async (t) => {
  t.ok()
})

test('run 2', async (t) => {
  t.ok()
})

test('run final', async (t) => {
  console.log('spy.callCount', spy.callCount)
})