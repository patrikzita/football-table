import React, { Component } from "react";
import Team from "./Team";

class Table extends Component {
  state = {
    
  };
  render() {
    const {teams, onDelete, jsonDelete, copyTeam} = this.props;
    return (
      <table className="table m-2">
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
          
          {teams.map((team, index) => 
            <Team
              key={team.id}
              order= {index + 1}
              team= {team}
              onDelete={onDelete}
              jsonDelete={jsonDelete}
              copyTeam={copyTeam}
            ></Team>
          )}
        </tbody>
      </table>
    );
  }
}

export default Table;
