import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            hasAgreed: false,
            userRole: '1'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;  
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleCheck(e) {
        let value = e.target.value;
        (value === "1")? this.setState({ userRole: "1" }) : this.setState({ userRole: "0" });        
    }

    handleSubmit(e) {
      e.preventDefault();

        // if(this.state.email && this.state.password){
            axios.post(`http://127.0.0.1:8000/api/auth/register`, { 
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation,
                userRole: this.state.userRole
            })
            .then(res => {
              let responseJson = res.data; 
              console.log('Response from API:');
              console.log(JSON.stringify(responseJson));
    
              let userData = {...responseJson, ...this.state }
            //   if(responseJson.access_token){
            //       sessionStorage.setItem('userData', JSON.stringify(userData));
                  console.log(JSON.stringify(userData));
              //     this.setState({redirectToReferrer: true});
            //   }
            });


        // }
        // console.log('The form was submitted with this following data:');
        // console.log(this.state);
    
    }

    render () {
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="userRole">Who are you?</label>
                   
                        <ul className="radio-container space-between">
                            <li className="option-item">
                                <label className="FormField__RadioLabel">
                                    <input type="radio" id="role" className="FormField__Radio" name="userRole" value="1" onChange={this.handleCheck} defaultChecked /> I'm food enthusiast
                                </label>
                            </li>
                            <li className="option-item">
                                <label className="FormField__RadioLabel">
                                    <input type="radio" id="role2" className="FormField__Radio" name="userRole" value="0" onChange={this.handleCheck} /> I'm the restaurant owner
                                </label>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="username">Full Name</label>
                        <input type="text" id="username" className="FormField__Input" placeholder="Enter your full name" name="username"  value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your e-mail address" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" className="FormField__Input" placeholder="Re-Enter your password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input type="checkbox" id="hasAgreed" className="FormField__Checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in
                            <Link to="#" className="FormField__TermsLink">terms of service</Link>
                        </label>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button>
                        <Link to="/signin" className="FormField__Link">I'am already member</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;