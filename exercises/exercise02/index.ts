const URL = "https://www.google.com";

/**
 * Throws after the given amount of milliseconds.
 * @param ms The amount of milliseconds to wait
 * @returns A promise that never resolves
 */
function throwAfter(ms: any) {
  // TODO: fix the type of ms parameter
  // TODO: return a promise that rejects after the given amount of milliseconds with a TimeoutError
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
  const response = await fetch(url, {method: "GET"});
  return response.status; // TODO (Bonus Task): also return the duration of the request
}

/**
 * Runs the given promise with a timeout.
 * @param promise The running promise
 * @param timeout The timeout in milliseconds
 */
async function withTimeout(promise: Promise<any>, timeout: number) {
  // TODO: make this function generic and fix the type of the promise parameter. This function should be a transparent wrapper around the given promise.
  console.log(`Running with timeout of ${timeout}ms`);
  // TODO: return the result of the given promise if it resolves before the timeout. If not, throw a TimeoutError.
}

async function main() {
  console.log("Starting...");
  const status = await withTimeout(pingUrl(URL), 1000);
  console.log(`Fetched on ${URL} with status ${status}`); // TODO (Bonus Task): also print the duration of the request
  console.log('Stopping...');
}

main().catch(console.error);