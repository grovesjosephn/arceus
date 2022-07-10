export default function unwrap<T>(fn: Generator<T>): T {
  return fn.next().value;
}
