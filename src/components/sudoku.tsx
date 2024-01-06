import Header from "./header";
import { getActiveBoards } from "./utils";

const Sudoku: React.FC = () => {
  const boards = new Array(9).fill(new Array(9).fill(null));

  let cellClass =
    "cursor-pointer caret-transparent pl-4 w-10 h-10 grid place-items-center transition  bg-white  active:scale-95 ";
  function active(boardIdx: number, cellIdx: number): void {
    const boardsElm = document.querySelectorAll(".board");
    // console.log(boardsElm);

    for (const boardElm of boardsElm) {
      for (const cellElm of boardElm.children) {
        cellElm.className = cellClass;
      }
    }

    for (const cellElm of boardsElm[boardIdx].children) {
      cellElm.className = cellClass.replace("bg-white", "bg-cyan-200");
    }

    const actives: any[] = getActiveBoards(boardIdx, cellIdx);
    // console.log(actives);

    for (const activeboardIdx in actives) {
      const activeBoardElm = boardsElm[activeboardIdx];
      const activeCells = actives[activeboardIdx];
      // console.log(activeCells);

      for (const activeCellIdx of activeCells) {
        const activeCellElm = activeBoardElm.children[activeCellIdx];
        activeCellElm.className = cellClass.replace("bg-white", "bg-cyan-200");
        // console.log("activeCellIdx" + activeCellIdx);
      }
    }
  }

  return (
    <div className=" items-cente  flex flex-col bg-white p-9">
      <Header />

      <div className="grid grid-cols-3 gap-0.5 bg-black p-0.5 selection:bg-cyan-400">
        {boards.map((board: any, boardIdx: number) => (
          <div className="board grid grid-cols-3 gap-px">
            {board.map((cell: any, cellIdx: number) => (
              <input
                onClick={() => active(boardIdx, cellIdx)}
                data-input-counter-min="1"
                data-input-counter-max="9"
                className={cellClass}
                type="number"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sudoku;
