function parseJson<T extends object>(json: string) {
  return JSON.parse(json) as T;
}

class JsonParser<T extends (object | null) = object> {
  parse(json: string) {
    return JSON.parse(json) as T;
  }
}

parseJson<{ test: number }>(`{"test":123}`);
new JsonParser<Record<string, number>>().parse(`{"test":123}`);
