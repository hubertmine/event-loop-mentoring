// run several times to show that it depends

setTimeout(function() {
    console.log('setTimeout')
}, 0);
setImmediate(function() {
    console.log('setImmediate')
});
