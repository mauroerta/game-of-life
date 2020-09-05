const filterAlives = (current: boolean) => !!current;

export function isLooping(history: boolean[][]): boolean {
  const [last, secondLast, thirdLast] = history.map(
    (cells) => cells.filter(filterAlives).length
  );
  if (!secondLast) {
    return false;
  }

  if (!thirdLast) {
    return last === secondLast;
  }

  return last === thirdLast;
}
