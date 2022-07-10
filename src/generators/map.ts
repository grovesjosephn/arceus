export default function* map<T, S>(iterable: Iterable<T>, fn: (value: T) => S): Generator<S, void, void> {
  for (const value of iterable)
    yield fn(value);
}
