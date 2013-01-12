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
      bgBlack         :  40
    , bgRed           :  41
    , bgGreen         :  42
    , bgYellow        :  43
    , bgBlue          :  44
    , bgMagenta       :  45
    , bgCyan          :  46
    , bgWhite         :  47
    , bgBrightBlack   :  100
    , bgBrightRed     :  101
    , bgBrightGreen   :  102
    , bgBrightYellow  :  103
    , bgBrightBlue    :  104
    , bgBrightMagenta :  105
    , bgBrightCyan    :  106
    , bgBrightWhite   :  107
    } 
  , colors = {}
  , styleNums = {
      bold      :  [1, 22]
    , dim       :  [2, 22]
    , italic    :  [3, 23]
    , underline :  [4, 24]
    , blink :  [5, 25]
    , inverse   :  [7, 27]
  }
  , styles = {}
  ;

Object.keys(styleNums).forEach(function (k) {
  styles[k] = function (s) { 
    var open = styleNums[k][0]
      , close = styleNums[k][1];
    return '\u001b[' + open + 'm' + s + '\u001b[' + close + 'm';
  };
});

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

// bold - brightens the color
// italic - nothing on mac
// underline - underlines string
// blink - nothing on mac
// inverse - background becomes foreground and vice versa
console.log( styles.blink(colors.brightBlue(' Hello world ')));
