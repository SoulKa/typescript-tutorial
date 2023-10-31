function parseJson<T>(json: string) {
  return JSON.parse(json) as T;
}

class JsonParser<T> {
  parse(json: string) {
    return JSON.parse(json) as T;
  }
}

parseJson<{ test: number }>(`{"test":123}`);
new JsonParser<{ test: number }>().parse(`{"test":123}`);
