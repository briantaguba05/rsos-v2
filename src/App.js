import React, { Component } from "react";
import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstAid from "./components/Tutorials/firstaid";
import HandGuide from "./components/Tutorials/handguide";
import Techniques from "./components/Tutorials/techniques";
import Dashboard from "./DashboardComp/DashboardFin";
import About from "./components/About/About";
import Download from "./components/Download/Download";
import Functions from "./components/Functions/Functions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import PageNotFound from "./404";
import TermsConditions from "./components/TermsConditions/TermsConditions";
import SignUp from "./components/Signup/index";
import Login from "./components/Login/index";
import { AuthProvider } from "./components/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPass from "./components/ForgotPass";
import MyInfo from "./components/MyInfo";
import Weather from "./components/Weather/Weather";
import ProtectRoute from "./components/ProtectRoute";
import News from "./components/News/News";
import { NewsContextProvider } from "./components/News/NewsContext";
import Authorization from "././DashboardComp/Authorization";
import AdminDashboard from "./DashboardComp/DashboardAdmin/DashboardAdmin";
import FamilyDashboard from "./DashboardComp/DashboardFamily/DashboardFamily";
import UserDashboard from "./DashboardComp/DashboardFamily/DashboardFamily";

class App extends Component {
  state = {
    userType: "none",
    adminAuthDashboards: ["Admin"],
    familyAuthDashboards: ["Family", "Admin"],
    userAuthDashboards: ["Family", "Admin", "User"],
  };
  selectUserType = (userType) => {
    this.setState({
      userType: userType,
    });
  };
  render() {
    const {
      userType,
      adminAuthDashboards,
      familyAuthDashboards,
      userAuthDashboards,
    } = this.state;

    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/forgotpassword" component={ForgotPass} exact />
          <Route path="/firstaid" component={FirstAid} exact />
          <Route path="/handguide" component={HandGuide} exact />
          <Route path="/techniques" component={Techniques} exact />

          <Route path="/about" component={About} exact />
          <Route path="/download" component={Download} exact />
          <Route path="/functions" component={Functions} exact />

          <Route path="/privacypolicy" component={PrivacyPolicy} exact />
          <Route path="/termsconditions" component={TermsConditions} exact />

          <Switch>
            <AuthProvider>
              <ProtectRoute path="/signup" component={SignUp} />
              <ProtectRoute path="/signin" component={Login} exact />
              <PrivateRoute path="/dashboard" component={Dashboard} exact />
              <PrivateRoute path="/myinfo" component={MyInfo} />
              <PrivateRoute path="/weather" component={Weather} exact />
              <NewsContextProvider>
                <PrivateRoute path="/news" component={News} exact />
              </NewsContextProvider>

              <PrivateRoute
                path="/admin/dashboard"
                component={Authorization(
                  AdminDashboard,
                  [...adminAuthDashboards],
                  userType
                )}
              />
              <PrivateRoute
                path="/family/dashboard"
                component={Authorization(
                  FamilyDashboard,
                  [...familyAuthDashboards],
                  userType
                )}
              />
              <PrivateRoute
                path="/user/dashboard"
                component={Authorization(
                  UserDashboard,
                  [...userAuthDashboards],
                  userType
                )}
              />
            </AuthProvider>
          </Switch>
          <Route path="" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
