'use strict';

var assert = require('assert')
  , colors = require('..');

assert.equal(colors.white('printed in white'), '\u001b[37mprinted in white\u001b[39m');

assert.equal(colors.black('printed in black'), '\u001b[30mprinted in black\u001b[39m');
assert.equal(colors.brightBlack('printed in bright black'), '\u001b[90mprinted in bright black\u001b[39m');

assert.equal(colors.green('printed in green'), '\u001b[32mprinted in green\u001b[39m');
assert.equal(colors.brightGreen('printed in bright green'), '\u001b[92mprinted in bright green\u001b[39m');

assert.equal(colors.red('printed in red'), '\u001b[31mprinted in red\u001b[39m');
assert.equal(colors.brightRed('printed in bright red'), '\u001b[91mprinted in bright red\u001b[39m');

console.log('DONE');
