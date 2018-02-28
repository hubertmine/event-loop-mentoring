// Always get setImmediate before setTimeout

setTimeout(() => {
  setTimeout(function() {
    console.log('setTimeout')
  }, 0);
  setImmediate(function() {
      console.log('setImmediate')
  });
}, 0);
