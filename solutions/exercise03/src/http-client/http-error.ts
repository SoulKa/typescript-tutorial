export class HttpError extends Error {

  public readonly status: number;

  /**
   * Creates a new HttpError
   * @param url The URL that was called
   * @param status The status code of the response
   */
  constructor(url: string, status: number) {
    super(`The HTTP call to ${url} responded with status code ${status}`);
    this.status = status;
  }
}