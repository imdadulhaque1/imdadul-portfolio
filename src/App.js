import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Service from "../src/components/Service";
import Navbar from "../src/components/Header/Navbar";
import { Switch, Route, Redirect} from "react-router-dom";

const App = () =>{
  return(
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route exact path="/about" component= {About} />
        <Route exact path="/service" component= {Service} />
        <Route exact  path="/contact" component= {Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;
