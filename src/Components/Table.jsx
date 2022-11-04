import React, { Component } from "react";
import Team from "./Team";

class Table extends Component {
  state = {
    team: [
      {
        name: "Jiskra Višňová",
        score: "15:15",
        points: 24,
      },
      {
        name: "Slovan Frýdlant",
        score: "1:10",
        points: 16,
      },
      {
        name: "Hradek nad Nisou",
        score: "21:12",
        points: 11,
      },
    ],
  };
  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Jméno</th>
            <th scope="col">Skóre</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          
          {this.state.team.map((team, index) => 
            <Team
              id={index + 1}
              name={team.name}
              score={team.score}
              points={team.points}
            ></Team>
          )}
        </tbody>
      </table>
    );
  }
}

export default Table;
