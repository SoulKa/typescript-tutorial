async function getNumberAsync() {
  return 1;
}

function getNumberPromise() {
  return new Promise<number>(
      (resolve, reject) => {
        resolve(1);
      }
  );
}

function getNumberPromiseResolve() {
  return Promise.resolve(1);
}

async function main() {
  console.log(await getNumberAsync());
  console.log(await getNumberPromise());
  console.log(await getNumberPromiseResolve());
}

main().catch(console.error);