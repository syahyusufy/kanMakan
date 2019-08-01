import React, { Component } from "react";
import {  MDBBtn, 
          MDBCol, 
          MDBContainer, 
          MDBRow, 
          MDBIcon, 
          MDBFooter,
          MDBFormInline,
          MDBNavbar,
          MDBNavbarBrand,
          MDBNavbarToggler,
          MDBCollapse,
          MDBNavbarNav
        } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <MDBNavbar color="blue" className="text-white darken-1" dark expand="md">
        <MDBContainer>
        <MDBFormInline className="container">
        <MDBNavbarBrand className="ml-5 font-weight-bold">kanMakan</MDBNavbarBrand>
        <MDBNavbarToggler/>
        <Router>
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
                  <MDBCol md="7 pl-0 pt-2">
                    
                      <MDBIcon className="text-white" icon="search" />
                      <input className="form-control form-control-md ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                    
                  </MDBCol>
                  <MDBCol sm="1 pr-5">
                    <MDBBtn color="solid-blue" className="btn-md">Login</MDBBtn>
                  </MDBCol>
                  <MDBCol sm="1 pl-5">
                    <MDBBtn className="text-nowrap btn-md" outline color="white" href="#">Create an account</MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBNavbarNav>
          </MDBCollapse>
        </Router>
        </MDBFormInline>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}
