import React from "react";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Service from "../src/components/Service";
import { Switch, Route} from "react-router-dom";

const App = () =>{
  return(
    <>
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route exact path="/about" component= {About} />
        <Route exact path="/service" component= {Service} />
        <Route exact path="/contact" component= {Contact} />
      </Switch>
    </>
  );
};
export default App;
