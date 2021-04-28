Input: n = 3;
Output: [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

function generateMatrix(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  let counter = 1;

  let startRow = 0;
  let endRow = n - 1;

  let startCol = 0;
  let endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // top
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // right
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;
      counter++;
    }

    endCol--;

    // bottom
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // left

    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return result;
}
