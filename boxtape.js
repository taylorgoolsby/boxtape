#!/usr/bin/env node

import { test } from 'tape'

function augment() {
  let beforeEach
  let afterEach

  function newTest(name, fn) {
    test(name, async (t) => {
      if (beforeEach) {
        await beforeEach()
      }
      await fn(t)
      if (afterEach) {
        await afterEach()
      }
    })
  }

  newTest.beforeEach = (fn) => {
    beforeEach = fn
  }
  newTest.afterEach = (fn) => {
    afterEach = fn
  }

  return newTest
}

const boxtapeTest = augment()
export default boxtapeTest
