export default function* fromSet<T>(set: Set<T>): Generator<T, void, void> {
  for (let item of set)
    yield item;
}
