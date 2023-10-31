import {HttpError} from "./http-error";

declare type FetchOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body: object;
}

export default class HttpClient {

  /**
   * Executes an HTTP request and returns the response body
   * @param url The URL to fetch on
   * @param options Additional options of the request
   */
  async fetchJson<T = any>(url: string, options = {} as Partial<FetchOptions>) {
    const response = await this.fetch(url, options);
    return await response.json() as T;
  }
  
  /**
   * Executes an HTTP request and returns the response
   * @param url The URL to fetch on
   * @param options Additional options of the request
   */
  async fetch(url: string, options = {} as Partial<FetchOptions>) {
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
      method: options.method ?? 'GET',
      headers,
      body: options.body && JSON.stringify(options.body),
    });

    // check status code
    if (!response.ok) {
      throw new HttpError(url, response.status);
    }
    return response;
  }

}