// Always get setImmediate before setTimeout

const fs = require('fs');

fs.readFile('text.txt' ,() => {
  setTimeout(function() {
    console.log('setTimeout')
  }, 0);
  setImmediate(function() {
      console.log('setImmediate')
  });
});
