import React from "react";
import ReactDOM from "react-dom";
import Example from "./example";
import ExampleV from "./examplev";

function App() {
  return (
    <div className="App">
      <Example />
      <ExampleV/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
