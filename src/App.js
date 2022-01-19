import * as Tone from "tone";

function App() {
  const synth = new Tone.Synth().toDestination();

  synth.triggerAttackRelease("C4", "8n");
  return <>Hello</>;
}

export default App;
