import { useState } from "react";
export default function Player({ initialName, symbol }) {

  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function setEditing() {
    //react generally schedule the event in near future
    // setIsEditing((editing) => !editing); // => schedules a state update can have previous value
    setIsEditing((editing) => !editing); //=> schedules a state update
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editableplayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editableplayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }

  return (
    <li>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={setEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
