import React, { Component } from "react";
import Table from "./Components/Table";
import "./App.css";
import "./script.js";
import MatchForm from './Components/MatchForm';
import TeamForm from "./Components/TeamForm";

class App extends Component {
  state = {
    team: []
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
    fetch("http://localhost:3500/team/")
    .then(response => response.json())
    .then(json => this.setState({team: json}))
  }
  render() {
    return (
      <>
        <h1>Tabulka</h1>
        <Table teams={this.state.team} onDelete={this.handleDelete}></Table>
        <TeamForm></TeamForm>
      </>
    );
  }
}

export default App;
