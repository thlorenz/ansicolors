// ColorCodes explained: http://www.termsys.demon.co.uk/vtansi.htm
'use strict';

var colorNums = {
      white         :  37
    , black         :  30
    , blue          :  34
    , cyan          :  36
    , green         :  32
    , magenta       :  35
    , red           :  31
    , yellow        :  33
    , brightBlack   :  90
    , brightRed     :  91
    , brightGreen   :  92
    , brightYellow  :  93
    , brightBlue    :  94
    , brightMagenta :  95
    , brightCyan    :  96
    , brightWhite   :  97
    }
  , backgroundColorNums = {
      bgBlack   :  40
    , bgRed     :  41
    , bgGreen   :  42
    , bgYellow  :  43
    , bgBlue    :  44
    , bgMagenta :  45
    , bgCyan    :  46
    , bgWhite   :  47
    } 
  , colors = {};


Object.keys(colorNums).forEach(function (k) {
  colors[k] = function (s) { 
    return '\u001b[' + colorNums[k] + 'm' + s + '\u001b[39m';
  };
});

Object.keys(backgroundColorNums).forEach(function (k) {
  colors[k] = function (s) { 
    return '\u001b[' + backgroundColorNums[k] + 'm' + s + '\u001b[49m';
  };
});

module.exports = colors;
