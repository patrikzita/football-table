import React, { Component } from "react";

class Team extends Component {
  state = {};
  render() {
    const { id, name, score, points } = this.props;
    console.log(this.props);
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{score}</td>
        <td>{points}</td>
      </tr>
    );
  }
}

export default Team;
