function samplePromise() {
  return Promise.resolve("Chuluq");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
