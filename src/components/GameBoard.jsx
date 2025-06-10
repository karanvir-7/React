// import { useState } from "react";



export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(inititalGameBoard);

  // function handleSelectSquare(rowIndex,colIndex) {
  //   setGameBoard((prevBoard) => {
  //       const updatedBoard = [...prevBoard.map(innerArr => [...innerArr])];
  //       updatedBoard[rowIndex][colIndex]  =  activePlayer;
  //       return updatedBoard
  //   });

  //   onSelectSquare()
  // }


  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => onSelectSquare(rowIndex, cellIndex)} disabled={cell !== null}>
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
