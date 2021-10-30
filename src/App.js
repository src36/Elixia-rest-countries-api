import logo from "./logo.svg";
import "./App.css";

import Region from "./components/Region";

function App() {
  return (
    <>
      <h1>Select Region</h1>
      <Region region={"asia"} />
      <Region region={"europe"} />
      Europe
    </>
  );
}

export default App;
