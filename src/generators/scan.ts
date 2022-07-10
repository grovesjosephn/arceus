export default function* scan<T, S>(iterable: Iterable<T>, fn: (acc: S, value: T) => S, acc: S): Generator<S, void, void> {
  for (const value of iterable) {
    acc = fn(acc, value);
    yield acc;
  }
}
