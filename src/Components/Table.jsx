import React, { Component } from "react";
import Team from "./Team";

class Table extends Component {
  state = {
    
  };
  render() {
    const {teams} = this.props;
    console.log(this.props.teams);
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Jméno</th>
            <th scope="col">Skóre</th>
            <th scope="col">Body</th>
            <th scope="col">BTN</th>
          </tr>
        </thead>
        <tbody>
          
          {teams.map((team, index) => 
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
