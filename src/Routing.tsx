import React from "react";
import "./App.css";
import Header from "./components/Header";
import { MissionContainer } from "./components/Mission/index";
import { MissionInfoContainer } from "./components/MissionInfo/index";
import { Route, Switch, useLocation } from "react-router";
import Home from "./components/Home";
import { useTransition, animated } from "react-spring";

export default function Routing() {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: {  opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
    
  });
  console.log(transitions);

  return (
    <> 
    <Header />
    

    <main className="main-container">
        {transitions.map(({ item, key, props  }) => (
          <animated.div key={key} style={props} className="animate">
         
            <Switch location={item} >
              <Route exact path="/" component={Home} />
              <Route exact path="/missions" component={MissionContainer} />
              <Route
              exact
                path="/missions/:id"
                component={MissionInfoContainer}
              />
            </Switch>
            </animated.div>))}
    
    </main>
    </>
  );
}
