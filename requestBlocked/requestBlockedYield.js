const co = require('co');
const agent = require('superagent');

const test = co.wrap(function* test() {
  try {
    console.log('ABOUT TO CALL');
    yield agent.get('https://postman-echo.com/delay/1').timeout(1500);
  } catch (err) {
    console.log(err, 'error happened');
  }
});

function blockProcess(duration) {
  const start = Date.now();
  while (Date.now() < start + duration) {
    // block the process
  }
  console.log('OUT OF THE LOOP');
  return Promise.resolve();
}

function* doIt() {
  yield [
    test(),
    blockProcess(1000 * 2)
  ]
}

co(doIt).then(() => {
  console.log('SUCCES');
}).catch(err => {
  console.log('FAILURE', err);
});
