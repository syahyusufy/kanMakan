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
<<<<<<< HEAD
    <Router>
        <MDBNavbar color="danger-color-dark" className="text-white font" >
          <div className="container">
            <MDBRow className="ml-5 mr-5">
              <MDBFormInline>
                <MDBCol size="1 pr-5">
                  <MDBNavbarBrand className="font-weight-bold">kanMakan</MDBNavbarBrand>
                </MDBCol>
                <MDBCol size="2 pl-5 pr-5">
                  <div>
                    <select className="browser-default custom-select form-control-sm">
                      <option>Choose City</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
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
=======
      <Router>
        <MDBContainer>
        <MDBNavbar color="blue" className="text-white darken-1" dark expand="md">
          <MDBContainer>
            <MDBNavbarBrand className="ml-5">kanMakan</MDBNavbarBrand>
            <MDBNavbarToggler/>
            <MDBCollapse navbar>
              <MDBNavbarNav>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="2 pr-0 pt-2">
                      <div>
                        <select className="browser-default custom-select form-control-sm">
                          <option>Choose City</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </MDBCol>
                    <MDBCol md="8 pl-0 pt-2">
                      <MDBFormInline className="container" action="#">
                        <MDBIcon className="text-white" icon="search" />
                        <input className="form-control form-control-md ml-3 w-60" type="text" placeholder="Search" aria-label="Search" onChange={this.handleKeywordChange}/>
                        <Link to={`/search/${this.state.keyword}`}>
                          <MDBBtn color="solid-blue" className="btn-md">Search</MDBBtn>
                        </Link>
                      </MDBFormInline>
                    </MDBCol>
                    <MDBCol sm="1 pr-5">
                      <Link to={`/home`}>
                        <MDBBtn color="solid-blue" className="btn-md">Login</MDBBtn>
                      </Link>
                    </MDBCol>
                    <MDBCol sm="1 pl-5">
                      <MDBBtn className="text-nowrap btn-md" outline color="white" href="#">Create an account</MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
            </MDBNavbarNav>
          </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      
        <Route path="/search/:keyword" component={SearchContainer} />
        <Route path="/home" component={Home} />
        </MDBContainer>
>>>>>>> refs/remotes/origin/master
      </Router>
    );
  }
}
