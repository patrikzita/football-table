import React, { Component } from 'react';
import Table from './Components/Table'
import './App.css';

class App extends Component {
  state = {  
    team: [
      {
        name: "Jiskra Višňová",
        score: "15:15",
        points: 24,
      },
      {
        name: "Slovan Frýdlant",
        score: "1:10",
        points: 16,
      },
      {
        name: "Hradek nad Nisou",
        score: "21:12",
        points: 11,
      },
    ],
  } 
  render() { 
    return (
    <>
    <h1>Tabulka</h1>
     <Table teams={this.state.team}></Table>
    </>
     
    );
  }
}
 
export default App;
