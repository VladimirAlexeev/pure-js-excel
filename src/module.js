console.log('MODULE.js');

async function start() {
  await Promise.resolve('async conso')
}

start().then(console.log)