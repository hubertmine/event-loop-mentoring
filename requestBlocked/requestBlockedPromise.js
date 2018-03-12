// Uncomment line 21 for great magic

const agent = require('superagent');

async function test() {
  const start = process.hrtime();
  try {
    const { body } = await agent.get('https://postman-echo.com/delay/1').timeout(1500);
    const stop = process.hrtime(start);
    console.log('TIME  ====', stop);
    console.log('THE BODY ====', body)
  } catch (err) {
    console.log(err, 'error happened');
  }
  console.log('OUT OF TEST')
}

async function blockProcess(duration) {
  console.log('STARTING THE BLOCK');
  const start = Date.now();
  await new Promise(resolve => { setTimeout(resolve, 10) });
  while (Date.now() < start + duration) {
    // block the process
  }
  console.log('OUT OF THE LOOP')
}

async function doIt() {
  await Promise.all([
    test(),
    blockProcess(1000 * 2)
  ])
}

doIt()
  .then(() => {
    console.log('SUCCES');
  }).catch(err => {
    console.log('FAILURE', err);
  })

