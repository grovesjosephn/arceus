export default function* fromRange(start: number, end: number, step: number = 1): Generator<number, void, void> {
  for (let i = start; i < end; i += step)
    yield i;
}
