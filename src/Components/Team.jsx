import React, { Component } from "react";

class Team extends Component {
  state = {};
  render() {
    const { onDelete, team, order, jsonDelete, copyTeam } = this.props;
    return (
      <tr>
        <th scope="row">{order}</th>
        <td>{team.name}</td>
        <td>{team.scoreGoals}:{team.recieveGoals}</td>
        <td>{team.points}</td>
        <td><button onClick={() => jsonDelete(team.id)} className="btn btn-danger btn-sm">Delete</button></td>
      </tr>
    );
  }
}

export default Team;
