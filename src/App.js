import React from "react";
import {Route} from "react-router-dom"

import HomePage from "./Components/HomePage"
import PizzaForm from "./Components/PizzaForm"

const App = () => {
  return (
    <>
    <Route exact path = "/">
      <HomePage/>
    </Route>
    <Route path = "/pizza">
      <PizzaForm/>
    </Route>
    </>
  );
};
export default App;
