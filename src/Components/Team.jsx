import React, { Component } from "react";

class Team extends Component {
  state = {};
  render() {
    const { onDelete } = this.props;

    console.log(this.props.team.id);
    console.log((() => onDelete(this.this.props.team.id)));
    return (
      <tr>
        
        <th scope="row">{this.props.team.id}</th>
        <td>{this.props.team.name}</td>
        <td>{this.props.team.score}</td>
        <td>{this.props.team.points}</td>
        <td><button onClick={() => this.props.onDelete(this.props.team.id)} className="btn btn-danger btn-sm">Delete</button></td>
      </tr>
    );
  }
}

export default Team;
