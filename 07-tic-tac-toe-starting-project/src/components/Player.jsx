import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  
  const displayName = <span className="player-name">{playerName}</span>;

  const inputName = (
    <input
      type="text"
      required
      value={playerName}
      onChange={handleNameChange}
    ></input>
  );

  return (
    <li>
      <span className="player">
        {isEditing ? inputName : displayName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
