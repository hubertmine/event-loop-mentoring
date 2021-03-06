Promise.resolve().then(() => console.log('promise1 resolved'));
Promise.resolve().then(() => console.log('promise2 resolved'));
Promise.resolve().then(() => {
    console.log('promise3 resolved');
    process.nextTick(() => {
      console.log('next tick inside promise resolve handler');
      Promise.resolve().then(() => console.log('inside process next tick'));
    });
    Promise.resolve().then(() => {
      console.log('promise inside promise');
      Promise.resolve().then(() => console.log('promise inside promise inside promise'));
      process.nextTick(() => console.log('next tick inside Promise inside Promise'));
    })
});
Promise.resolve().then(() => console.log('promise4 resolved'));
Promise.resolve().then(() => console.log('promise5 resolved'));
setImmediate(() => console.log('set immediate1'));

process.nextTick(() => console.log('next tick1'));

setTimeout(() => console.log('set timeout'), 0);
setImmediate(() => console.log('set immediate3'));
