import { useState } from "react";

function TeamForm() {
  // useState je hook který má stejnou moc jako u Class state a setState  
  const [teamName, setTeamName] = useState("");
  const onSubmitHandler = (event) => {
    // Díky této funkci se při stisknutí tlačítka nerefreshuje stránka
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type={"text"}
        placeholder={"Team name"}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <input type={"number"} placeholder={"Score goals"}></input>
      <input type={"number"} placeholder={"Recieve goals"}></input>
      <input type={"number"} placeholder={"Points"}></input>
      <input type={"submit"} value={"Create Team"} />
      <p>Právě píšu toto: {teamName}</p>
    </form>
  );
}

export default TeamForm;
