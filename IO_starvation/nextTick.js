let i = 0;

function test() {
  console.log('TICK ', i);
  i++;
  process.nextTick(test);
}

setTimeout(() => {
    console.log('OMG');
    process.exit(1)
}, 1);

test();
