import fetch from './fetch.js';

const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  const msg = await fetch('foo', false);
  console.log(elapsed(), 'throwOnce:', msg);
}

async function throwSeveral() {
  const msg1 = await fetch('foo1', false);
  console.log(elapsed(), 'throwSeveral1:', msg1);
  const msg2 = await fetch('foo2', false);
  console.log(elapsed(), 'throwSeveral2:', msg2);
  const msg3 = await fetch('foo3', false);
  console.log(elapsed(), 'throwSeveral3:', msg3);
}

async function throwChained() {
  const msg1 = await fetch('foo-chain', false);
  console.log(elapsed(), 'throwChained1:', msg1);
  const msg2 = await fetch(msg1, false);
  console.log(elapsed(), 'throwChained2:', msg2);
  const msg3 = await fetch(msg2, false);
  console.log(elapsed(), 'throwChained3:', msg3);
}

try {
  throwOnce()
    .then(() => throwSeveral())
    .then(() => throwChained());
} catch (error) {
  console.log('Error:', error.message);
}
