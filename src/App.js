import React, {useState} from "react";
import {Route} from "react-router-dom"

import HomePage from "./Components/HomePage"
import PizzaForm from "./Components/PizzaForm"
import SuccessPage from "./Components/SuccessPage"

const App = () => {


  const [postRes, setPostRes] = useState("")

  return (
    <>
    <Route exact path = "/">
      <HomePage/>
    </Route>
    <Route exact path = "/pizza">
      <PizzaForm postRes = {postRes} setPostRes = {setPostRes}/>
    </Route>
    <Route path = "/pizza/success">
      <SuccessPage postRes = {postRes} setPostRes = {setPostRes}/>
    </Route>
    </>
  );
};
export default App;
