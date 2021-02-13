import { React } from "react";
import Home from "../src/components/Home/Home";
import "./App.css";
import Route from "./components/Routing/Route";
import OverTime from "./components/OverTime/OverTime";
import Personnel from "./components/Personnel/Personnel";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/overtime">
        <OverTime />
      </Route>
      <Route path="/personnel">
        <Personnel />
      </Route>
    </div>
  );
}

export default App;
