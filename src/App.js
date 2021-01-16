import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import "./App.css"

function App() {
    return (
        <Router> 
            <Switch>
                <Route exact path = "/" component={About}/>
                <Route exact path = "/portfolio" component={Portfolio}/>
                <Route exact path = "/contact" component={Contact}/>
            </Switch>
        </Router>
    )
}

export default App;