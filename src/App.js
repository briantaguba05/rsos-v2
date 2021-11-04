import React, { Component } from "react";
import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstAid from "./components/Tutorials/firstaid";
import HandGuide from "./components/Tutorials/handguide";
import Techniques from "./components/Tutorials/techniques";
import Dashboard from "./DashboardComp/DashboardUser";
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
import MyInfoAdmin from "./components/MyInfo/MyInfoAdmin";
import MyInfoFamily from "./components/MyInfo/MyInfoFamily";
import MyInfoUser from "./components/MyInfo/MyInfoUser";
import MyInfo from "./components/MyInfo/MyInfo";
import Weather from "./components/Weather/Weather";
import ProtectRoute from "./components/ProtectRoute";
import News from "./components/News/News";
import { NewsContextProvider } from "./components/News/NewsContext";
import AdminDashboard from "./DashboardComp/DashboardAdmin/DashboardAdmin";
import FamilyDashboard from "./DashboardComp/DashboardFamily/DashboardFamily";
import UserDashboard from "./DashboardComp/DashboardUser/DashboardUser";

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
      <div>
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

            <AuthProvider>
              <ProtectRoute path="/signup" component={SignUp} />
              <ProtectRoute path="/signin" component={Login} exact />
              <PrivateRoute path="/dashboard" component={Dashboard} exact />
              <PrivateRoute path="/dashboard/myinfo" component={MyInfo} />
              <PrivateRoute path="/admin/weather" component={Weather} exact />
              <NewsContextProvider>
                <PrivateRoute path="/dashboard/news" component={News} exact />
              </NewsContextProvider>

              <PrivateRoute
                path="/dashboard/admin"
                component={AdminDashboard}
              />
              <PrivateRoute
                path="/dashboard/family"
                component={FamilyDashboard}
              />
              <PrivateRoute path="/dashboard/user" component={UserDashboard} />

              <PrivateRoute
                path="/dashboard/admin/myinfo"
                component={MyInfoAdmin}
              />
              <PrivateRoute
                path="/dashboard/family/myinfo"
                component={MyInfoFamily}
              />
              <PrivateRoute
                path="/dashboard/user/myinfo"
                component={MyInfoUser}
              />
            </AuthProvider>

            <Route path="" component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

/*

<PrivateRoute
                  path="/dashboard/user"
                  component={Authorization(
                    UserDashboard,
                    [...userAuthDashboards],
                    userType
                  )}
                />
                
                */
