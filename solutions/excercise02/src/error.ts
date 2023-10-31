/**
 * Error thrown when a timeout is reached
 */
export class TimeoutError extends Error {
  /**
   * Creates a new TimeoutError
   * @param timeout The timeout in milliseconds
   */
  public constructor(public readonly timeout: number) {
    super(`Timeout of ${timeout}ms reached`);
  }
}