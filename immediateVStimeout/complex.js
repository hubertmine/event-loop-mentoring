setImmediate(() => console.log('this is set immediate 1'));

setTimeout(() => console.log('this is set timeout 1'), 0);
setTimeout(() => {
  console.log('this is set timeout 2');
  process.nextTick(() => console.log('this is process.nextTick added inside setTimeout'));
}, 0);
setTimeout(() => console.log('this is set timeout 3'), 0);

process.nextTick(() => console.log('this is process.nextTick 1'));
process.nextTick(() => {
  process.nextTick(() => console.log('this is the inner next tick inside next tick'));
});
process.nextTick(() => console.log('this is process.nextTick 2'));
