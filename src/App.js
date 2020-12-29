import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./containers/Login/login.jsx";
import Logout from "./containers/Logout/logout.jsx";

import Home from "./containers/Home/home.jsx";
import Dashboard from "./containers/Admin_Dashboard/index.jsx";
import Signup from "./containers/Signup/signup.jsx";
import Main_Settings from "./containers/Restaurant_Settings/Main_settings/main_settings.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/main_settings" exact component={Main_Settings} />


            <Route path="/logout" component={Logout} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
