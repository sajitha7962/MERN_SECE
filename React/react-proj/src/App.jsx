
import Home from "./Home";
import "./App.css";
function Players(props) {
  return (
    <>
      <h1>Players Page</h1>
      <p>Department: {props.obj}</p>

      <h2>List of Players</h2>

      {props.obj1.map((player) => (
         <div className="player-card" key={player.id}>
          <p>Name: {player.name}</p>
          <p>Team: {player.team}</p>
          <p>ID: {player.id}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

function Data(props) {
  return (
    <>
      <h1>Data Page</h1>
      <p>Department: {props.obj}</p>
      <p>Name: {props.name}</p>
    </>
  );
}

function App() {
  let Players_data = [
    {
      id: 100,
      name: "Sajitha",
      team: "SECE",
    },
    {
      id: 101,
      name: "Sujin",
      team: "SECE",
    },
    {
      id: 102,
      name: "Abhisheik",
      team: "SECE",
    },
  ];

  return (
    <>
      <h1>Hello React</h1>

      <Home />

      <Data obj="SECE" name="John Doe" />

      <Players obj="SECE" obj1={Players_data} />
    </>
  );
}

export default App;
