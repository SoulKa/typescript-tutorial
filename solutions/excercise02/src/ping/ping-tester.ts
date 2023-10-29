import HttpClient from "../http-client/http-client";

export default class PingTester {

  private readonly httpClient = new HttpClient();

  /**
   * Pings the given URL and returns the response time and the response body
   * @param url The URL to ping
   */
  async ping(url: string) {
    const now = Date.now();
    await this.httpClient.fetch(url);
    return Date.now() - now;
  }
}