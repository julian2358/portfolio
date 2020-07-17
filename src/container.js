import { Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from './com/About';
import Contact from './com/contact';
import Projects from './com/projects'
function Container(location) {
    {/* default path is set to home */}
     {/* switch is used to render one component at a time */}
return (


   <Switch>

     <Route exact path="/" component={Home} />
     <Route exact path="/Contact" component={Contact} />
     <Route exact path="/Projects" component={Projects} />

   </Switch>
  

);
};

export default Container;