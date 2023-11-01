export class HttpError extends Error {

  /**
   * Creates a new HttpError
   * @param url The URL that was called
   * @param status The status code of the response
   */
  constructor(url: string, public readonly status: number) {
    super(`The HTTP call to ${url} responded with status code ${status}`);
  }
}