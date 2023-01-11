import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router } from "react-router-dom";
import NavRouter from './Router/NavRouter';
import PageRouter from "./Router/PageRouter";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar/>
        <NavRouter/>
        <PageRouter/>
      </React.Fragment>
    </Router>
  )
}

export default App;

// npx json-server -p 3500 -w db.json