import React, { Component } from "react";
import Table from "./Components/Table";
import "./App.css";
import "./script.js";
import MatchForm from "./Components/MatchForm";
import TeamForm from "./Components/TeamForm";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Link,
  Router,
} from "react-router-dom";

class App extends Component {
  state = {
    team: [],
    error: "",
    copiedTeam: "",
  };

  sortTeam = (jsonTeam) => {
    const team = [...jsonTeam];

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
  deleteTeamHandle = (id) => {
    fetch(`http://localhost:3500/team/${id}`, { method: "DELETE" })
      .then(() => console.log("Delete successful"))
      .finally(() => {
        this.reloadFetch();
      });
  };
  addTeamHandle = (team) => {
    const newTeam = [...this.state.team];
    newTeam.push(team);
    this.setState({ team: newTeam });
  };

  reloadFetch = () => {
    fetch("http://localhost:3500/team")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Unable to get data: ${response.statusText}`);
      })
      .then((json) => {
        this.setState({ team: json });
        this.sortTeam(json);
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  componentDidMount() {
    // při každým refreshi stránky se tabulka aktualizuje
    this.reloadFetch();
  }

  render() {
    return (
      <>
        

        {this.state.error && <h2>{this.state.error}</h2>}
        <h1>Tabulka</h1>
        <Table
          teams={this.state.team}
          onDelete={this.handleDelete}
          jsonDelete={this.deleteTeamHandle}
        ></Table>
        <TeamForm
          fetchData={this.fetchData}
          reloadFetch={this.reloadFetch}
        ></TeamForm>
      </>
    );
  }
}

export default App;
