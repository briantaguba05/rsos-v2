import React from "react";
import "./App.css";
import Home from "./pages";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstAid from "./components/Tutorials/firstaid";
import HandGuide from "./components/Tutorials/handguide";
import Techniques from "./components/Tutorials/techniques";
import SignUp2 from "./components/Signup/signupindex2";
import SignUpT from "./components/Signup";
import Dashboard from "./pages/dashboard";
import Mapbox from "./components/Map/Mapbox";
import News from "./components/News/News";
import About from "./components/About/About";
import Download from "./components/Download/Download";
import Functions from "./components/Functions/Functions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import { NewsContextProvider } from "./components/News/NewsContext";
import PageNotFound from "./404";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/firstaid" component={FirstAid} exact />
        <Route path="/handguide" component={HandGuide} exact />
        <Route path="/techniques" component={Techniques} exact />
        <Route path="/signupindex2" component={SignUp2} exact />
        <Route path="/signuptest" component={SignUpT} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/mapbox" component={Mapbox} exact />

        <Route path="/news" component={News} exact />

        <Route path="/about" component={About} exact />
        <Route path="/download" component={Download} exact />
        <Route path="/functions" component={Functions} exact />
        <Route path="/privacypolicy" component={PrivacyPolicy} exact />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
