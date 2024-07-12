function samplePromise() {
  return Promise.resolve("Chuluq");
}

const name = await samplePromise();
console.info(name);
