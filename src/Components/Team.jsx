import React, { Component } from "react";

class Team extends Component {
  state = {};
  render() {
    const { onDelete, team, order } = this.props;
    return (
      <tr>
        <th scope="row">{order}</th>
        <td>{team.name}</td>
        <td>{team.score}</td>
        <td>{team.points}</td>
        <td><button onClick={() => onDelete(team.id)} className="btn btn-danger btn-sm">Delete</button></td>
      </tr>
    );
  }
}

export default Team;
