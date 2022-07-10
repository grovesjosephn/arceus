export default function* reduce<T, S>(iterable: Iterable<T>, fn: (acc: S, value: T) => S, acc: S): Generator<void, S, void> {
  for (const value of iterable) {
    acc = fn(acc, value);
  }
  return acc;
}
