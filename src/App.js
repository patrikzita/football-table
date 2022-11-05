import React, { Component } from "react";
import Table from "./Components/Table";
import "./App.css";

class App extends Component {
  state = {
    team: [
      {
        id: 1,
        name: "Jiskra Višňová",
        score: "15:15",
        points: 24,
      },
      {
        id: 2,
        name: "Slovan Frýdlant",
        score: "1:10",
        points: 16,
      },
      {
        id: 3,
        name: "Hradek nad Nisou",
        score: "21:12",
        points: 11,
      },
      {
        id: 4,
        name: "FC Pěnčín",
        score: "18:18",
        points: 5,
      },
    ],
  };
  handleDelete = (teamID) => {
    const team = this.state.team.filter((team) => team.id !== teamID);
    this.setState({ team: team });
  };
  render() {
    return (
      <>
        <h1>Tabulka</h1>
        <Table teams={this.state.team} onDelete={this.handleDelete}></Table>
      </>
    );
  }
}

export default App;
