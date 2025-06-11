export default function GameOver({ winner, onReset }) {
  return (
    <div id="game-over">,
      <h2>Game Over</h2>
      { winner  && <h2 className="winner"> {winner} has won the game!</h2>}
      { !winner && <h2 className="draw">It's a draw!</h2> }
      <button onClick={onReset}>Play Again</button>
    </div>
  );
}