import React from "react";
import SearchContainer from "./SearchContainer";
import Home from "./Home";

import {  MDBBtn, 
          MDBCol, 
          MDBRow, 
          MDBIcon, 
          MDBFormInline,
          MDBNavbar,
          MDBNavbarBrand
        } from "mdbreact";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as cityAction from '../actions/cityAction';

class Header extends React.Component {
  constructor(){
		super()
		this.state={
			keyword:''
		}
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }
  
  handleCityChange(e){
    this.setState({city: e.target.value});
    this.props.setCity(e.target.value);
    console.log(e.target.value);
    e.preventDefault();
  }

  handleKeywordChange(e){
    this.setState({keyword: e.target.value});
    console.log(this.state.keyword);
		e.preventDefault();
  }
  
  render() {
    return (
      <Router>
        <MDBNavbar color="danger-color-dark" className="text-white font" >
          <div className="container">
            <MDBRow className="ml-5 mr-5">
              <MDBFormInline>
                <MDBCol size="1 pr-5">
                  <MDBNavbarBrand className="font-weight-bold font-title">kanMakan</MDBNavbarBrand>
                </MDBCol>
                <MDBCol size="2 pl-5 pr-5">
                  <div>
                    <select value={this.props.city} className="browser-default custom-select form-control-sm" onChange={this.handleCityChange}>
                      <option value="1">Bandung</option>
                      <option value="2">Jakarta</option>
                    </select>
                  </div>
                </MDBCol>
                <MDBCol size="7 pl-5">
                  <MDBIcon icon="search pr-2"/>
                  <input className="form-control w-75" type="text" placeholder="Search" aria-label="Search" onChange={this.handleKeywordChange}/>
                  <Link to={`/search/${this.state.keyword}`}>
                      <MDBBtn color="solid-blue text-white" className="btn-md mr-auto">Search</MDBBtn>
                  </Link>
                </MDBCol>
                <MDBCol size="1 pl-4 pr-0">
                  <Link to={`/home`} className="text-white font-weight-bold">Log in</Link>
                </MDBCol>
                <MDBCol size="1 pl-0">
                  <MDBBtn className="btn-md" outline color="white" href="#">Create</MDBBtn>
                </MDBCol>
              </MDBFormInline>
            </MDBRow>
          </div>
        </MDBNavbar>
          <Route path="/search/:keyword" component={SearchContainer} />
          <Route path="/home" component={Home} />
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.cityChange
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCity: city => dispatch(cityAction.setCity(city))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
