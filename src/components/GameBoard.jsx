import { useState } from "react";

const inititalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare,activePlayer}) {
    
  const [gameBoard, setGameBoard] = useState(inititalGameBoard); 

  function handleSelectSquare(rowIndex,colIndex) {
    setGameBoard((prevBoard) => {
        const updatedBoard = [...prevBoard.map(innerArr => [...innerArr])]; 
        updatedBoard[rowIndex][colIndex]  =  activePlayer;
        return updatedBoard 
    });

    onSelectSquare()
  } 


  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={ () => handleSelectSquare(rowIndex,cellIndex)}>{cell}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
