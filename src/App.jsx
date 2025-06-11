import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { winningCombinations } from "./winningCombination";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
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

function checkWinner(gameBoard, players) {
    let winner;
  
  for(let combination of winningCombinations){
    const firstSquare = gameBoard[combination[0].row][combination[0].col];
    const secondSquare = gameBoard[combination[1].row][combination[1].col];
    const thirdSquare = gameBoard[combination[2].row][combination[2].col];
    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = players[firstSquare];
    }
  }
  return winner
}

function deriveGameBoard(gameTurns) {
    let gameBoard = INITIAL_GAME_BOARD.map(row => [...row]);
  for (let turn of gameTurns) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  }
  return gameBoard
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players,setPlayers] = useState({
    X:  'Player 1',
    O: 'Player 2'
  })
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = checkWinner(gameBoard,players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRestart() {
    setGameTurns([]);
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurn  => {
      const currentPlayer = deriveActivePlayer(prevTurn);
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

  function handlePlayerNameChange(player, name) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [player]: name
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialName={PLAYERS.Y} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
        </ol>
        { (winner || hasDraw) && <GameOver winner={winner} onReset={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
