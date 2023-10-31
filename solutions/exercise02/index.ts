import {TimeoutError} from "./src/error";

const URL = "https://www.google.com";

/**
 * Throws after the given amount of milliseconds.
 * @param ms The amount of milliseconds to wait
 * @returns A promise that never resolves
 */
function throwAfter(ms: number) {
  return new Promise<never>((resolve, reject) => setTimeout(() => reject(new TimeoutError(ms)), ms));
}

/**
 * Fetches on a URL and returns the HTTP status code.
 * @param url The URL to fetch on
 * @returns The HTTP status code
 */
async function pingUrl(url: string) {
  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  // execute HTTP request
  console.log("Fetching " + url);
  const now = Date.now();
  const response = await fetch(url, {method: "GET"});
  return [response.status, Date.now() - now] as [number, number];
}

/**
 * Runs the given promise with a timeout.
 * @param promise The running promise
 * @param timeout The timeout in milliseconds
 */
async function withTimeout<T>(promise: Promise<T>, timeout: number) {
  console.log(`Running with timeout of ${timeout}ms`);
  return await Promise.race([promise, throwAfter(timeout)]);
}

async function main() {
  console.log("Starting...");
  const [status, duration] = await withTimeout(pingUrl(URL), 1000);
  console.log(`Fetched on ${URL} with status ${status} in ${duration}ms`);
  console.log('Stopping...');
}

main().catch(console.error);