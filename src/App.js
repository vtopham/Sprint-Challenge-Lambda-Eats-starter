import React, {useState} from "react";
import {Route} from "react-router-dom"

import HomePage from "./Components/HomePage"
import PizzaForm from "./Components/PizzaForm"

const App = () => {


  const [postRes, setPostRes] = useState("")

  return (
    <>
    <Route exact path = "/">
      <HomePage/>
    </Route>
    <Route path = "/pizza">
      <PizzaForm postRes = {postRes} setPostRes = {setPostRes}/>
    </Route>
    </>
  );
};
export default App;
