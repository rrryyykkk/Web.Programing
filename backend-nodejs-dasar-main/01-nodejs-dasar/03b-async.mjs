function samplePromise() {
  return Promise.resolve("Rohmat Arief");
}

const name = await samplePromise();
console.info(name);
