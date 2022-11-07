
function MatchForm({teams}) {
  return (
    <>
    <h3 className="m-3">Domací tým</h3>
      <select
        class="form-select form-select-sm w-50 m-3"
        aria-label=".form-select-sm example"
      >
        {teams.map((team)=>{
            return <option key={team.id}>{team.name}</option>
        })}
      </select>
      <h3 className="m-3">Hostující tým</h3>
      <select
        class="form-select form-select-sm w-50 m-3"
        aria-label=".form-select-sm example"
      >
        {teams.map((team)=>{
            return <option key={team.id}>{team.name}</option>
        })}
      </select>
    </>
  );
}

export default MatchForm;
