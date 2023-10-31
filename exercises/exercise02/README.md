# Exercise 02

This exercise tests basic knowledge about `Promises`, `async`, and `await`.

## Tasks

- [ ] implement the function `throwAfter(ms)` that rejects after the given amount of milliseconds.
  The thrown error should be an instance of `TimeoutError`. Keep in mind that this async function
  never returns a value. What is the correct return type here?
- [ ] implement the function `withTimeout(promise, timeout)` that wraps the given promise to reject
  after the given timeout or return the value of the promise whichever comes faster.
- [ ] **Bonus Task:** modify the `pingUrl(url)` function to also return the duration of the request.

## Hints

Static `Promise` methods:

```typescript
Promise.resolve(1234); // resolves with 1234
Promise.reject(new Error("error")); // rejects with an error
Promise.all([promise1, promise2]); // resolves once all promises resolve, rejects if one rejects
Promise.race([promise1, promise2]); // resolves once the first promise resolves, rejects if the first rejects
```

Array unwrapping:

```typescript
const array = [1, 2, 3];
const [first, second, third] = array;
console.log(first); // 1
```