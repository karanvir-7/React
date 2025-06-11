import { useState } from "react";
export default function Player({ initialName, symbol, isActive,  onChangeName }) {

  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function setEditing() {
    //react generally schedule the event in near future
    // setIsEditing((editing) => !editing); // => schedules a state update can have previous value
    setIsEditing((editing) => !editing); //=> schedules a state update
    if( isEditing ) onChangeName(symbol, playerName); // call the callback function to update the player name
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerElement = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerElement = <input type="text" required value={playerName} onChange={handleChange} />;
  }

  return (
    <li className= {isActive ? "active" : undefined}>
      <span className="player">
        {playerElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={setEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
