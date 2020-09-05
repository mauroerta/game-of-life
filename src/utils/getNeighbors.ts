type ConditionTuple = [number, boolean];

type GetNeighborsParams = {
  index: number;
  cols: number;
  rows: number;
};

export function getNeighbors({ index, cols, rows }: GetNeighborsParams) {
  const left: ConditionTuple = [index - 1, index > cols % rows];
  const right: ConditionTuple = [index + 1, index % cols < cols];
  const top: ConditionTuple = [index - cols, index > cols];
  const bottom: ConditionTuple = [index + cols, index < cols * (rows - 1)];
  const topLeft: ConditionTuple = [index - cols - 1, index % cols > 1];
  const topRight: ConditionTuple = [index - cols + 1, index % cols < cols - 1];
  const bottomLeft: ConditionTuple = [
    index + cols - 1,
    index % (cols * rows) < cols * (rows - 1),
  ];
  const bottomRight: ConditionTuple = [
    index + cols + 1,
    index % (cols * rows) < cols * (rows - 2),
  ];

  return {
    left,
    right,
    bottom,
    top,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
  };
}
