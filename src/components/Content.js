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
     <MDBRow className="pb-3 pl-4">
       <MDBCard className="card">
         <MDBCardBody>
           <MDBRow className="line">
             <MDBCol size="4">
                <img className="img-square-wrapper" src={"http://via.placeholder.com/300x180"} alt="Card image cap" width={125} height={100}/>
             </MDBCol> 
             <MDBCol size="7">
               <div className="font-card">
                 <div><a className="grey-text">Cafe</a></div>
                 <div className="font-weight-bold font-card-title">{this.props.search.restaurantName}</div>
                 <div><b>Bogor Selatan</b></div>
                 <div className="grey-text"> {this.props.search.restaurantAddress}</div>
                </div>
             </MDBCol>
             <MDBCol>

             </MDBCol>
           </MDBRow>
           <MDBRow className="pt-3 font-card">
             <MDBCol size="4" className="grey-text">
               <div> CUSINES:</div>
               <div> COST FOR TWO:</div>
               <div> HOUR:</div>
             </MDBCol>
             <MDBCol colSpan="2">
               <div>Jawa</div>
               <div>Rp.{this.props.search.restaurantAverageCost}</div>
               <div>9h 30m – 21h (Mon-Fri),9h 30m – 22h (Sat-Sun)</div>
             </MDBCol>
           </MDBRow>
         </MDBCardBody>
         <MDBCardFooter color="danger-color-dark">
           <MDBRow>
             <MDBCol size="6" className="text-center">
                <MDBIcon icon="phone"/>
                <span> Call </span>
             </MDBCol>
             <MDBCol size="5" className="text-center">
                <MDBIcon icon="bars"/>
                <span> View Menu </span> 
             </MDBCol>
           </MDBRow>
         </MDBCardFooter>
       </MDBCard>
     </MDBRow>
    )
  }
}