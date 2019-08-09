import React from "react";
import SearchContainer from "./SearchContainer";
import Home from "./Home";

import {  MDBBtn, 
          MDBCol, 
          MDBContainer, 
          MDBRow, 
          MDBIcon, 
          MDBFormInline,
          MDBNavbar,
          MDBNavbarBrand,
          MDBNavbarToggler,
          MDBCollapse,
          MDBNavbarNav
        } from "mdbreact";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export class Header extends React.Component {
  constructor(){
		super()
		this.state={
			keyword:''
		}
		this.handleKeywordChange = this.handleKeywordChange.bind(this);
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
                    <select className="browser-default custom-select form-control-sm">
                      <option>Choose City</option>
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
