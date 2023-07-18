import React, { useState } from "react";
import "./Leaderboard.css";

function Leaderboard() {
  const [searchValue, setSearchValue] = useState("");

  // Fetch leaderboard data and handle search functionality

  return (
    <div className="Leaderboard">
      <h1>ARK: Survival Evolved Leaderboard</h1>
      <table className="Board">
        <tr>
          <th>Username</th>
          <th>Rank</th>
          <th>Score</th>
          <th>kills</th>
        </tr>
        <tr>
          <td>Avto</td>
          <td>1</td>
          <td>1231231</td>
          <td>120</td>
        </tr>
        <tr>
          <td>Dachi</td>
          <td>2</td>
          <td>213921</td>
          <td>90</td>
        </tr>
        <tr>
          <td>Nika</td>
          <td>3</td>
          <td>1230</td>
          <td>30</td>
        </tr>
      </table>
    </div>
  );
}

export default Leaderboard;
