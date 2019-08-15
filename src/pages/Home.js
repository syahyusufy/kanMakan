import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from './../_actions/loginActions';

class Home extends Component {
  
  render() {
    // const user = this.props.user;
    // if (! user.token) {
    //   return ( <Redirect to="/" /> );
    // }

    // let userData = {name: 'kiki', age: 21};
    // sessionStorage.setItem(userData, JSON.stringify(userData));
    let user = JSON.parse(sessionStorage.getItem('userData'));

    // if (! user.access_token) {
    //   return ( <Redirect to="/" /> );
    // }

    return (
      <div>
        <h1>Hello, {user === null? "You": user.email}</h1>
        {/* <p><Link to="#" onClick={() => this.props.logout()}>LOGOUT</Link></p> */}
      </div>
    );
  }
}

// Home = connect(
//   state => ({
//     user: state.user
//   }),
//   (dispatch, ownProps) => ({
//     logout: () => {
//       localStorage.clear();
//       dispatch(deleteUser())
//     }
//   })
// )(Home);

export default Home;
