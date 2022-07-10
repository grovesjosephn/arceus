export default function* concat<T>(...iterables: Iterable<T>[]): Generator<T, void, void> {
  for (let iterable of iterables) {
    for (let item of iterable)
      yield item;
  }
}
