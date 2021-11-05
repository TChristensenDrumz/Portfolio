import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Landing from "./pages/Landing/Landing";
import NotFound from "./pages/NotFound/NotFound";

// Styling
import "./styles/main.css";
import "./styles/variables.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
