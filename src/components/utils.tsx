const activeRows: any = {
  0: [0, 1, 2],
  1: [0, 1, 2],
  2: [0, 1, 2],
  3: [3, 4, 5],
  4: [3, 4, 5],
  5: [3, 4, 5],
  6: [6, 7, 8],
  7: [6, 7, 8],
  8: [6, 7, 8]
};
const activeColums: any = {
  0: [0, 3, 6],
  3: [0, 3, 6],
  6: [0, 3, 6],
  1: [1, 4, 7],
  4: [1, 4, 7],
  7: [1, 4, 7],
  2: [2, 5, 8],
  5: [2, 5, 8],
  8: [2, 5, 8]
};

const getRows = (activeIdx: number) => {
  return activeRows[activeIdx];
};

const getColumns = (activeIdx: number) => {
  return activeColums[activeIdx];
};
                             
export const getActiveBoards = (boardIdx: number, cellIdx: number) => {
  const result: any = {};

  const rows = getRows(boardIdx);
  for (const row of rows) {
    result[row] = getRows(cellIdx);
  }

  const columns = getColumns(boardIdx);
  for (const column of columns) {
    result[column] = getColumns(cellIdx);
  }

  return result;
};
