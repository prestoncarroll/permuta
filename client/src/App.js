import { React } from "react";
import PayPeriod from "./components/PayPeriod/PayPeriod";
import Table from "./components/Table/Table";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="ui container">
        <div>Learn React</div>
        <PayPeriod />
        <Table />
      </div>
    </div>
  );
}

export default App;
