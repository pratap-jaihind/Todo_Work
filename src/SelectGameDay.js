import React, { useState } from "react";

const SelectGameDays = () => {
  const games = ["Cricket", "Football", "Hockey", "Bollyball"];
  const days = ["Monday", "Tuesday", "Wednesday"];

  const [selectGame, setSelectGame] = useState("");
  const [selectDay, setSelectDay] = useState("");

  return (
    <>
      <div>
        <h1>Select the game</h1>
        {games.map((game, index) => (
          <div>
            {" "}
            <input
              type="radio"
              value={game}
              key={index}
              name="game"
              checked={selectGame === game}
              onChange={(e) => setSelectGame(e.target.value)}
            />
            {game}
          </div>
        ))}
      </div>
      <div>
        <h1> Select the days</h1>
        {days.map((day, index) => (
          <div>
            <input
              type="radio"
              value={day}
              key={index}
              name="day"
              checked={selectDay === day}
              onChange={(e) => setSelectDay(e.target.value)}
            />
            {day}
          </div>
        ))}
      </div>
      {selectGame && selectDay && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h3 className="text-lg font-medium">You selected:</h3>
          <p>
            🎮 Game: <strong>{selectGame}</strong>
          </p>
          <p>
            📅 Day: <strong>{selectDay}</strong>
          </p>
        </div>
      )}
    </>
  );
};

export default SelectGameDays;
