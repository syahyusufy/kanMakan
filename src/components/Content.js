import React, { Component } from "react";
import {  MDBBtn, 
          MDBCol, 
          MDBRow, 
          MDBIcon, 
          MDBCard,
          MDBCardBody,
          MDBCardFooter
        } from "mdbreact";

export default class Content extends React.Component {
  render () {
    return (
<<<<<<< HEAD
=======
     
>>>>>>> refs/remotes/origin/master
         <MDBRow className="pb-3">
           <MDBCard className="card">
             <MDBCardBody>
               <MDBRow className="line">
                 <MDBCol size="4">
<<<<<<< HEAD
                    <img className="img-square-wrapper" src={"http://via.placeholder.com/300x180"} alt="Card image cap" width={125} height={100}/>
=======
                       <img className="img-square-wrapper" src={"http://via.placeholder.com/300x180"} alt="Card image cap" width={125} height={100}/>
>>>>>>> refs/remotes/origin/master
                 </MDBCol> 
                 <MDBCol size="7" className="font-small">
                   <div><a className="grey-text">Cafe</a></div>
                   <div className="font-weight-bold h3">{this.props.search.name}</div>
                   <div><b>Bogor Selatan</b></div>
                   <div className="grey-text"> {this.props.search.address}</div>
                 </MDBCol>
                 <MDBCol>

                 </MDBCol>
               </MDBRow>
               <MDBRow className="pt-3 font-small">
                 <MDBCol size="4" className="grey-text">
                   <p> CUSINES:</p>
                   <p> COST FOR TWO:</p>
                   <p> HOUR:</p>
                 </MDBCol>
                 <MDBCol colSpan="2">
                   <p><a>Jawa</a></p>
                   <p>Rp.{this.props.search.average_cost}</p>
                   <p>9h 30m – 21h (Mon-Fri),9h 30m – 22h (Sat-Sun)</p>
                 </MDBCol>
               </MDBRow>
             </MDBCardBody>
             <MDBCardFooter color="danger-color-dark">
               <MDBRow>
<<<<<<< HEAD
               <MDBCol size="6" className="text-center">
                  <MDBIcon icon="phone"/>
                  <span> Call </span>
               </MDBCol>
               <MDBCol size="5" className="text-center">
                  <MDBIcon icon="bars"/>
                  <span> View Menu </span> 
=======
               <MDBCol md="6" className="text-center">
                 <MDBBtn flat>
                   <MDBIcon icon="phone"/>
                    Call 
                 </MDBBtn>
               </MDBCol>
               <MDBCol md="5" className="text-center">
                 <MDBBtn flat>
                   <MDBIcon icon="bars"/>
                    View Menu 
                 </MDBBtn>
>>>>>>> refs/remotes/origin/master
               </MDBCol>
               </MDBRow>
             </MDBCardFooter>
           </MDBCard>
         </MDBRow>
    )
  }
}