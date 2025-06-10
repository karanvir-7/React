import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { winningCombinations } from "./winningCombination";
import GameOver from "./components/GameOver";
const inititalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currentPlayer = 'X';
  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  
  // const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = inititalGameBoard.map(row => [...row]);
  for (let turn of gameTurns) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  }

  let winner;
  const hasDraw = gameTurns.length === 9 && !winner;
  for(let combination of winningCombinations){
    const firstSquare = gameBoard[combination[0].row][combination[0].col];
    const secondSquare = gameBoard[combination[1].row][combination[1].col];
    const thirdSquare = gameBoard[combination[2].row][combination[2].col];
    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = firstSquare;
    }
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((prevActivePlayer) => prevActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurn  => {
      const currentPlayer =deriveActivePlayer(prevTurn);
      const updateTurn = [{
        square : {
          row: rowIndex,
          col: colIndex
        },
        player: activePlayer
      },...prevTurn];
      return updateTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        { (winner || hasDraw) && <GameOver winner={winner} onReset={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
