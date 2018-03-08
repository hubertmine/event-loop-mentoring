process.env.BLOCKED_DELAY = 10;
process.env.BLOCKED_THRESHOLD = 300;

const { start, stop } = require('chpr-blocked');
start();

const { promisify } = require('util');
const delay = promisify(setTimeout);

function blocking(delay) {
  console.log('START LOOP === ', delay);
  const start = Date.now();
  while (Date.now() < start + delay) {
    // I am blocking
  }
  console.log('OUT OF THE LOOP === ', delay);
}

async function pointInPolygon() {
  await blocking(100);
  await(delay(100));
  await blocking(200);
  await(delay(100));
  await blocking(250);
  await(delay(100));
  await blocking(350);
  await(delay(100));
  await blocking(500);

  await(delay(500));

  stop();
}

setTimeout(pointInPolygon, 200);

