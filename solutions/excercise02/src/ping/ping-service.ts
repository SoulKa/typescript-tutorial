import PingTester from "./ping-tester";

export default class PingService {

  private readonly pings = new Map<string, number>();
  private readonly pingTester = new PingTester();

  /**
   * Returns the pings as an array of tuples
   */
  getPings() {
    return Array.from(this.pings.entries());
  }

  /**
   * Returns the ping for the given URL
   * @param url The URL to get the ping for
   */
  getPing(url: string) {
    return this.pings.get(url);
  }

  /**
   * Sets the ping for the given URL
   * @param url The URL to set the ping for
   * @param duration The duration of the ping
   */
  setPing(url: string, duration: number) {
    this.pings.set(url, duration);
  }


  /**
   * Deletes the ping for the given URL
   * @param url The URL to delete the ping for
   */
  deletePing(url: string) {
    this.pings.delete(url);
  }

  /**
   * Deletes all saved pings
   */
  deletePings() {
    this.pings.clear();
  }

  /**
   * Runs a ping test for the given URL and sets the ping
   * @param url The URL to run the ping test for
   */
  async runPingTest(url: string) {
    const duration = await this.pingTester.ping(url);
    this.setPing(url, duration);
    return duration;
  }

  /**
   * Runs a ping test for the given URLs in parallel
   * @param urls The URLs to run the ping tests for
   */
  async runPingTests(urls: string[]) {
    return await Promise.all(urls.map(url => this.getOrRunPingTest(url)));
  }

  /**
   * Returns the ping for the given URL or runs a ping test if no ping is available
   * @param url The URL to get the ping for
   */
  async getOrRunPingTest(url: string) {
    return this.getPing(url) ?? await this.runPingTest(url);
  }

}