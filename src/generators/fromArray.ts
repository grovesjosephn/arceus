export default function* fromArray<T>(array: Array<T>): Generator<T, void, void> {
  for (let i = 0; i < array.length; i++)
    yield array[i];
}
