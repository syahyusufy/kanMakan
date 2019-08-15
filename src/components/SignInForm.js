import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as userAction from '../actions/userAction';
import { connect } from 'react-redux';
import axios from 'axios';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      console.log("test")
    if(localStorage.getItem("userData")){
      console.log("test2")
        this.props.history.goBack();
      }
    }

    handleChange(e) {
        let target = e.target;
        let value  = target.value;  
        let name   = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
      e.preventDefault();

      if(this.state.email && this.state.password){
        axios.post(`http://127.0.0.1:8000/api/auth/login`, {
            email: this.state.email,
            password: this.state.password })
        .then(res => {
          let responseJson = res.data; 
          console.log('Response from API:');
          console.log(JSON.stringify(responseJson));

        //   let userData = {...responseJson, ...this.state }
          let userData = {...responseJson}
          if(responseJson.access_token){
            //   sessionStorage.setItem('userData', JSON.stringify(userData));
              localStorage.setItem('userData', JSON.stringify(userData));
              console.log(JSON.stringify(userData));

              this.props.login(userData);

              this.props.history.goBack();
          }
        });

      }
    }
    
    render () {
      // if (this.state.redirectToReferrer || localStorage.getItem('userData')){
      //   return (<Redirect to='/home'/>)
      // }

        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your e-mail address" 
                        name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" 
                        name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button>
                        <Link to="/signup" className="FormField__Link">Create an Account</Link>
                    </div>

                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userLogin : state.authentication
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: userLogin => dispatch(userAction.login(userLogin))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);