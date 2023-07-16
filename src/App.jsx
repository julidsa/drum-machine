import "./index.css";
import DrumPad from "./components/DrumPad";
import DrumProps from "./util/drumProps";

function App() {
  return (
    <div id="drum-machine">
      <h1>Welcome to the Drum Machine!</h1>
      <p>A challenge series of freecodeCamp</p>
      <div id="display">
        {DrumProps.map((drum) => (
          <DrumPad
            key={drum.id}
            id={drum.id}
            name={drum.name}
            audio={drum.audio}
          />
        ))}
      </div>
      <footer>
        <p>by Juliana</p>
      </footer>
    </div>
  );
}

export default App;
