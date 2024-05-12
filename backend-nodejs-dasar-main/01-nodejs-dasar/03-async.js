function samplePromise() {
  return Promise.resolve("Rohmat Arief");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
