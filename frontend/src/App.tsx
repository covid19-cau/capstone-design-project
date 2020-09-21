import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import router from "configs";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>{router()}</Switch>
      </Router>
    </div>
  );
}

export default App;
