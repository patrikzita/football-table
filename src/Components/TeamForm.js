import { useState } from "react";

function TeamForm(props) {
  // useState je hook který má stejnou moc jako u Class state a setState
  const [teamName, setTeamName] = useState("");
  const [scoreGoals, setScoreGoals] = useState("");
  const [recieveGoals, setRecieveGoals] = useState("");
  const [points, setPoints] = useState("");
  const [response, setResponse] = useState();

  const onSubmitHandler = (event) => {
    // Díky této funkci se při stisknutí tlačítka nerefreshuje stránka
    event.preventDefault();

    const team = {
      name: teamName,
      scoreGoals: scoreGoals,
      recieveGoals: recieveGoals,
      points: points,
    };

    fetch("http://localhost:3500/team/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(team),
    }).then((response) => response.json())
    .then(json => setResponse(json))
    .finally(() =>{
      setTeamName("");
      setScoreGoals("");
      setRecieveGoals("");
      setPoints("");
      props.reloadFetch();
    })
    
  };

  return (
    <>
      <form className="m-3" onSubmit={onSubmitHandler}>
        <input
          type={"text"}
          placeholder={"Team name"}
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type={"number"}
          placeholder={"Score goals"}
          value={scoreGoals}
          onChange={(e) => setScoreGoals(e.target.value)}
        ></input>
        <input
          type={"number"}
          placeholder={"Recieve goals"}
          value={recieveGoals}
          onChange={(e) => setRecieveGoals(e.target.value)}
        ></input>
        <input
          type={"number"}
          placeholder={"Points"}
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        ></input>
        <input type={"submit"} value={"Create Team"} />
        <p>Právě píšu toto: {teamName}</p>
      </form>
      {response && <div>{JSON.stringify(response)}</div>}
    </>
  );
}

export default TeamForm;
