import React, { Component } from "react";
import Table from "./Components/Table";
import "./App.css";
import "./script.js";

class App extends Component {
  state = {
    team: [
      {
        id: 1,
        name: "Jiskra Višňová",
        scoreGoals: 31,
        recieveGoals: 20,
        points: 23,
      },
      {
        id: 2,
        name: "Slovan Frýdlant",
        scoreGoals: 25,
        recieveGoals: 24,
        points: 18,
      },
      {
        id: 3,
        name: "Hradek nad Nisou",
        scoreGoals: 36,
        recieveGoals: 16,
        points: 33,
      },
      {
        id: 4,
        name: "FC Pěnčín",
        scoreGoals: 39,
        recieveGoals: 16,
        points: 29,
      },
      {
        id: 5,
        name: "FK Sedmihorky",
        scoreGoals: 38,
        recieveGoals: 20,
        points: 30,
      },
    ],
  };
  sortTeam = () => {
    const team = [...this.state.team];

    team.sort((a, b) => {
      if (b.points === a.points) {
        const differenceB = b.scoreGoals - b.recieveGoals;
        const differenceA = a.scoreGoals - a.recieveGoals;

        return differenceB - differenceA;
      } else {
        return b.points - a.points;
      }
    });
    this.setState({ team: team });
  };
  handleDelete = (teamID) => {
    const team = this.state.team.filter((team) => team.id !== teamID);
    this.setState({ team: team });
  };
  componentDidMount(){
    // při každým refreshi stránky se tabulka aktualizuje
    this.sortTeam();
  }
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
