import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './app.scss';
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <div className="app">
       <Nav/>
      </div>
    </Router>
  );
}

export default App;
