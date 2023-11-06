# Exercise 03 - Webserver

This exercise aims to be a realistic use-case of TypeScript. We will build a simple webserver that
runs and caches the ping tests under `/ping` from the last exercise. As a bonus task,
the `/products` API mirrors a remote API and returns the filtered data.

The API already exists, only the implementation is missing. You can find the Postman and Bruno
Collections in the exercise root.

## Tasks

- [ ] fix the processing of the options in `HttpClient.fetch()`
- [ ] implement the missing business logic of the `PingService`
- [ ] implement the APIs in the ping router by using the `PingService`
- [ ] Bonus: implement the generic `fetchJson()` method that automatically JSON parses the HTTP
  response and casts it to the given generic type
- [ ] Bonus: export the interface `ProductsPage` so that it matches the response
  from `https://dummyjson.com/products`
- [ ] Bonus: implement the `/products` API by fetching on `https://dummyjson.com/products` and
  returning all products that cost more than 1000

## Hints

**Mesuring time:**

```typescript
const now = Date.now();
await someAsyncMethod();
const duration = Date.now() - now; // in ms
```

**Map, Filter, Reduce:**

```typescript
const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// Using filter to find even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Using reduce to calculate the sum of all numbers
const sum = numbers.reduce((sum, num) => sum + num, 0);
console.log("Sum of numbers:", sum);
```
