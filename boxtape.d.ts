import tape = require('tape');

declare function boxtape(name: string, cb: tape.TestCase): void;
declare function boxtape(name: string, opts: tape.TestOptions, cb: tape.TestCase): void;
declare function boxtape(cb: tape.TestCase): void;
declare function boxtape(opts: tape.TestOptions, cb: tape.TestCase): void;

declare namespace boxtape {
    export function beforeEach(fn: tape.TestCase): void;
    export function afterEach(fn: tape.TestCase): void;
}

export = boxtape
