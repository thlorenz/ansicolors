# ansicolors [![build status](https://secure.travis-ci.org/thlorenz/ansicolors.png)](http://next.travis-ci.org/thlorenz/ansicolors)

Functions that surround a string with ansicolor codes.

## Installation

    npm install ansicolors

## Usage

```js
var colors = require('ansicolors');

var redHerring = colors.red('herring');
var blueMoon = colors.blue('moon');
var brighBlueMoon = colors.brightBlue('moon');

console.log(redHerring);      // this will print 'herring' in red
console.log(blueMoon);        // this 'moon' in blue
console.log(brightBlueMoon);  // I think you got the idea
```

## Tests

Look at the [tests](https://github.com/thlorenz/ansicolors/blob/master/test/ansicolors.js) to see more examples and/or run them via: 

    npm explore ansicolors && npm test
