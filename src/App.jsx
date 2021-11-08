import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Landing from "./pages/Landing/Landing";
import WebDeveloper from "./pages/WebDeveloper/WebDeveloper";
import GameDeveloper from "./pages/GameDeveloper/GameDeveloper";
import ProductManager from "./pages/ProductManager/ProductManager";
import Musician from "./pages/Musician/Musician";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

// Styling
import "./styles/main.css";
import "./styles/variables.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/web" component={WebDeveloper} />
        <Route exact path="/game" component={GameDeveloper} />
        <Route exact path="/product" component={ProductManager} />
        <Route exact path="/music" component={Musician} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
