import React from "react";
import {  MDBBtn, 
          MDBCol, 
          MDBContainer, 
          MDBRow, 
          MDBIcon, 
          MDBFormInline,
        } from "mdbreact";

import "../index.css";
import { connect } from 'react-redux';
import * as cityAction from '../actions/cityAction';
import { Link} from "react-router-dom";

class LandHeader extends React.Component {
  constructor(){
		super()
		this.state={
      keyword:'',
      render : false
		}
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }
  
  componentDidMount(){
    this.setState({render : true}) 
    console.log(this.props.userLogin);
    console.log(this.props.city);
  }

  componentDidUpdate(prevProps){
    console.log(this.props.userLogin.loggedIn);

    if(this.props.userLogin.loggedIn !== prevProps.userLogin.loggedIn ){
      this.setState({render : true})
    }
  }


  handleSubmit(){
    console.log(this.props.history);
    this.props.history.push("/search/"+this.state.keyword);
  }

  handleCityChange(e){
    console.log(this.props.userLogin);
    localStorage.removeItem("userData")
    this.setState({city: e.target.value});
    this.props.setCity(e.target.value);
    e.preventDefault();
   }

  handleKeywordChange(e){
    this.setState({keyword: e.target.value});
    console.log(this.state.keyword);
		e.preventDefault();
  }

   render() {
      
      return (
         <div>
            <div className="bg">
              <MDBContainer className="text-center">
                <MDBRow>
                { this.props.userLogin.loggedIn ?
                  <MDBCol align="right" className="mt-4">
                   <a className="font-weight-bold text-light" href="#">{this.props.userLogin.user.username}</a> 
                  </MDBCol> 
                  : 
                  <MDBCol align="right" className="mt-4">
                    <Link className="pr-3 font-weight-bold text-light" to="/signin">Masuk</Link>
                    <MDBBtn outline color="white" href="#">Daftar</MDBBtn>
                  </MDBCol> 
                }
                </MDBRow>
                <MDBRow>
                  <MDBCol className="container mt-5">
                     <img src={"https://cdn.auth0.com/blog/react-js/react.png"} alt="Logo" width={200} height={200}/>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="mt-3"> 
                    <h3 className="font-weight-bold text-light">Find the best restaurants, cafés, and bars in Bandung</h3> 
                  </MDBCol>
                </MDBRow>
                <MDBRow className="p-5">
                  <MDBCol md="2"/>
                  <MDBCol md="2 pr-0 pb-3">
                    <div>
                      <select value={this.props.city} className="browser-default custom-select form-control-sm" onChange={this.handleCityChange}>
                        <option value="1">Bandung</option>
                        <option value="2">Jakarta</option>
                      </select>
                    </div>
                  </MDBCol>
                  <MDBCol md="7 pl-0">
                    <MDBFormInline action="#" className="container" onSubmit={this.handleSubmit}>
                    
                      <MDBIcon className="text-white" icon="search" />
                      <input onChange={this.handleKeywordChange} className="form-control form-control-md ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                    
                    </MDBFormInline>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
  
    return {
      city: state.cityChange, 
      userLogin : state.authentication
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      setCity: city => dispatch(cityAction.setCity(city))
    }
};
  

export default connect(mapStateToProps, mapDispatchToProps)(LandHeader);