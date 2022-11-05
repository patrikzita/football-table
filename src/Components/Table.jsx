import React, { Component } from "react";
import Team from "./Team";

class Table extends Component {
  state = {
    
  };
  render() {
    const {teams, onDelete} = this.props;
    console.log(this.props.teams);
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Jméno</th>
            <th scope="col">Skóre</th>
            <th scope="col">Body</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          
          {teams.map((team) => 
            <Team
              key={team.id}
              team= {team}
              onDelete={onDelete}
            ></Team>
          )}
        </tbody>
      </table>
    );
  }
}

export default Table;
