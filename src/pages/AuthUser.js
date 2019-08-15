import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './../components/SignUpForm';
import SignInForm from './../components/SignInForm';

import './../css/AuthUser.css';

class AuthUser extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside"></div>

          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink to="/signin" className="PageSwitcher__Item" activeClassName="PageSwitcher__Item--Active">Sign In</NavLink>
              <NavLink to="/signup" exact className=" PageSwitcher__Item" activeClassName="PageSwitcher__Item--Active">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
              <NavLink to="/signin" className="FormTitle__Link" activeClassName="FormTitle__Link--Active">Sign In</NavLink> or
              <NavLink to="/signup" exact className="FormTitle__Link" activeClassName="FormTitle__Link--Active">Sign Up</NavLink>
            </div>

            <Route path="/signup" component={SignUpForm} />
            <Route path="/signin" component={SignInForm} />
            
            
        </div>
      </div>
      </Router>
    );
  }
}

export default AuthUser;
