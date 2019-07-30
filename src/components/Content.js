import React, { Component } from "react";
import {  MDBBtn, 
          MDBCol, 
          MDBContainer, 
          MDBRow, 
          MDBIcon, 
          MDBCard,
          MDBCardTitle,
          MDBCardBody,
          MDBCardImage,
          MDBCardText,
          MDBCardFooter,
          MDBFooter
        } from "mdbreact";

export class Content extends React.Component {
  render () {
    return (
     <div className="mt-5 mb-5">
       <MDBContainer>
         <MDBRow>
           <MDBCard className="card">
             <MDBCardBody>
               <MDBRow className="line">
                 <MDBCol size="4">
                       <img classNames="img-square-wrapper" src={"http://via.placeholder.com/300x180"} alt="Card image cap" width={125} height={100}/>
                 </MDBCol> 
                 <MDBCol size="7" className="font-small">
                   <div><a className="grey-text">Cafe</a></div>
                   <div className="font-weight-bold h3"><a href="">Starbuck Coffe</a></div>
                   <div><b>Bogor Selatan</b></div>
                   <div className="grey-text">Farmers Market Jl.Pahlawan, Bogor Selatan, Bogor</div>
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
                 <MDBCol colspan="2">
                   <p><a>Jawa</a></p>
                   <p>Rp.300.000</p>
                   <p>9h 30m – 21h (Mon-Fri),9h 30m – 22h (Sat-Sun)</p>
                 </MDBCol>
               </MDBRow>
             </MDBCardBody>
             <MDBCardFooter color="blue">
               <MDBRow>
               <MDBCol md="6" className="text-center">
                 <MDBBtn flat>
                   <MDBIcon icon="phone"/>
                   <a> Call </a>
                 </MDBBtn>
               </MDBCol>
               <MDBCol md="5" className="text-center">
                 <MDBBtn flat>
                   <MDBIcon icon="bars"/>
                   <a> View Menu </a>
                 </MDBBtn>
               </MDBCol>
               </MDBRow>
             </MDBCardFooter>
           </MDBCard>
         </MDBRow>
         </MDBContainer>
     </div>
    )
  }
}