import React from "react";
import "./App.css";
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages";
import SignInPage from "./pages/signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstAid from "./components/Tutorials/firstaid";
import HandGuide from "./components/Tutorials/handguide";
import Techniques from "./components/Tutorials/techniques";
import SignUp from "./components/Signup/signupindex";
import SignUp2 from "./components/Signup/signupindex2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/firstaid" component={FirstAid} exact />
        <Route path="/handguide" component={HandGuide} exact />
        <Route path="/techniques" component={Techniques} exact />
        <Route path="/signupindex" component={SignUp} exact />
        <Route path="/signupindex2" component={SignUp2} exact />
      </Switch>
    </Router>
  );
}

export default App;
