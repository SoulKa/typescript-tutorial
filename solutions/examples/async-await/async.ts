import {readFileSync} from "fs";
import {readFile} from "fs/promises";

const FILES = ["test-file.txt", "file-2.txt", "file-3.txt"];

function printFileSync(filename: string) {
  console.log(readFileSync(filename, "utf-8"));
}

async function printFile(filename: string) {
  console.log(await readFile(filename, "utf-8"));
}

async function printAllFiles() {
  for (const file of FILES) {
    await printFile(file);
  }
}

async function printAllFilesParallel() {
  const promises = FILES.map(file => readFile(file, "utf-8"));
  const contents = await Promise.all(promises);
  contents.forEach(content => console.log(content));
}

printFileSync(FILES[0]);
printFile(FILES[0]).catch(console.error);
printAllFiles().catch(console.error);
printAllFilesParallel().catch(console.error);
