export default function* filter<T>(iterable: Iterable<T>, fn: (value: T) => boolean): Generator<T, void, void> {
  for (const value of iterable)
    if (fn(value))
      yield value;
}
