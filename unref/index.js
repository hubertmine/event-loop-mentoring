// Uncomment l14 for magic

const { sum, interval } = require('./dep');

async function start() {
  const couples = [[1, 2], [2, 3], [3, 4]];
  couples.map(([a, b]) => console.log(`Sum of ${a} and ${b} is ${sum(a, b)}`));
}

if (!module.parent) {
  start()
    .then(() => {
      console.log('SUCCESS');
      // interval.unref();
    })
    .catch(err => console.log('Some error happened', err))
}
