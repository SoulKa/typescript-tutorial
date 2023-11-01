import {HttpError} from "./http-error";

declare type FetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body: object;
}

export default class HttpClient {

  // TODO (Bonus): implement async generic fetchJson(url, options) method that returns the response body as parsed JSON.
  //  The default generic type should be object.

  /**
   * Executes an HTTP request and returns the response
   * @param url The URL to fetch on
   * @param options Additional options of the request
   */
  async fetch(url: string, options = {} as FetchOptions) {
    // TODO: make all properties of options optional
    if (!url.startsWith("http")) {
      url = "https://" + url;
    }

    // prepare headers
    const headers = new Headers();
    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    // execute HTTP request
    console.log("Fetching " + url);
    const response = await fetch(url, {
      method: options.method, // TODO: expect options.method to be null or undefined and use "GET" as default
      headers,
      body: options.body as any as undefined, // TODO: expect options.body to be null or undefined and parse to JSON if it is not
    });

    // check status code
    if (!response.ok) {
      throw new HttpError(url, response.status);
    }
    return response;
  }

}