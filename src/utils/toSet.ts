export default function toSet<T>(iterable: Iterable<T>): Set<T> {
  const set = new Set<T>();
  for (let item of iterable)
    set.add(item);
  return set;
}
