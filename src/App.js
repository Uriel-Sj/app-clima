import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home/Home.js';
import './App.css';
import CityInformation from "./pages/CityInformation/CityInformation.js";

function App() {
  return (

     <BrowserRouter >
      <Switch > 
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/:city" exact>
            <CityInformation/>
        </Route>
      </Switch> 
    </BrowserRouter>

  );
}

export default App;