import React from "react";
import {   
          MDBCol, 
          MDBContainer, 
          MDBRow, 
          MDBCard,
          MDBCardBody,
          
          MDBCardText,
          
          MDBFooter,
          
        } from "mdbreact";

import "../index.css";

export class LandContent extends React.Component {
   render() {
      return (
        <MDBContainer>
        <div className="content">
          <h3 className="font-weight-bold">Collections</h3>
          <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Jakarta, based on trends</p>
        </div>
          <div className="collections-grid row">
            <MDBRow>
              <MDBCol sm="4 pb-3">
                <MDBCard>
                  <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img classNames="" src={"http://via.placeholder.com/300x180"} width={145} height={120}/>
                    </div>
                    <div className="card-body">
                        <h5 className ="card-title font-weight-bold">Card title</h5>
                        <p className="card-text ">Restoran terpopuler di kotamu minggu ini.</p>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="4 pb-3">
                <MDBCard>
                  <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img classNames="" src={"http://via.placeholder.com/300x180"} alt="Card image cap" width={145} height={120}/>
                    </div>
                    <div className="card-body">
                        <h5 className ="card-title font-weight-bold">Card title</h5>
                        <p className="card-text ">Restoran terpopuler di kotamu minggu ini.</p>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="4 pb-3">
                <MDBCard>
                  <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img classNames="" src={"http://via.placeholder.com/300x180"} alt="Card image cap" width={145} height={120}/>
                    </div>
                    <div className="card-body">
                        <h5 className ="card-title font-weight-bold">Card title</h5>
                        <p className="card-text ">Restoran terpopuler di kotamu minggu ini.</p>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
              <MDBCol sm="4 pb-3">
                <MDBCard>
                  <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img classNames="" src={"http://via.placeholder.com/300x180"} alt="Card image cap" width={145} height={120}/>
                    </div>
                    <div className="card-body">
                        <h5 className ="card-title font-weight-bold">Card title</h5>
                        <p className="card-text ">Restoran terpopuler di kotamu minggu ini.</p>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="4 pb-3">
                <MDBCard>
                  <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img classNames="" src={"http://via.placeholder.com/300x180"} alt="Card image cap" width={145} height={120}/>
                    </div>
                    <div className="card-body">
                        <h5 className ="card-title font-weight-bold">Card title</h5>
                        <p className="card-text ">Restoran terpopuler di kotamu minggu ini.</p>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="4 pb-3">
                <MDBCard>
                  <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img classNames="" src={"http://via.placeholder.com/300x180"} alt="Card image cap" width={145} height={120}/>
                    </div>
                    <div className="card-body">
                        <h5 className ="card-title font-weight-bold">Card title</h5>
                        <p className="card-text ">Restoran terpopuler di kotamu minggu ini.</p>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>

          <div className="mt-5 pt-5">
            <h3 className="font-weight-bold">Quick Searches</h3>
            <p>Discover restaurants by type of meal</p>
          </div>

          <div className="collections-grid mb-5 table-light grid-container ui segment eight column doubling padded grid">
            <MDBRow className="p-5 pt-0">
              <MDBCol> 
                <a href="https://www.zomato.com/id/jakarta/sarapan" class="column ta-center start-categories-item">
                  <img src={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp"} data-original={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp"} height={48} width={48} display="inline-block"/>
                  <div>Breakfast</div>
                </a>
              </MDBCol>
              <MDBCol>
                <a href="https://www.zomato.com/id/jakarta/makan-siang" className="column ta-center start-categories-item">
                    <img src={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp"} data-original={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp"} height={48} width={48} display="inline-block"/>
                    <div>Launch</div>
                </a>
              </MDBCol>
              <MDBCol>
                <a href="https://www.zomato.com/id/jakarta/makan-siang" className="column ta-center start-categories-item">
                    <img src={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp"} height={48} width={48} display="inline-block"/>
                    <div>Dinner</div>
                </a>
              </MDBCol>
              <MDBCol>
                <a href="https://www.zomato.com/id/jakarta/makan-siang" className="column ta-center start-categories-item">
                    <img src={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png?output-format=webp"} data-original={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp"} height={48} width={48} display="inline-block"/>
                    <div>Delivery</div>
                </a>
              </MDBCol>
               <MDBCol>
                <a href="https://www.zomato.com/id/jakarta/makan-siang" className="column ta-center start-categories-item">
                    <img src={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp"} data-original={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp"} height={48} width={48} display="inline-block"/>
                    <div>Drink & Nightlife</div>
                </a>
              </MDBCol>
               <MDBCol>
                <a href="https://www.zomato.com/id/jakarta/makan-siang" className="column ta-center start-categories-item">
                    <img src={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp"} data-original={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp"} height={48} width={48} display="inline-block"/>
                    <div>Cafés</div>
                </a>
              </MDBCol>
               <MDBCol>
                <a href="https://www.zomato.com/id/jakarta/makan-siang" className="column ta-center start-categories-item">
                    <img src={"https://b.zmtcdn.com/images/search_tokens/app_icons/special_23.png?output-format=webp"} data-original={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp"} height={48} width={48} display="inline-block"/>
                    <div>Luxury Dining</div>
                </a>
              </MDBCol>
               <MDBCol>
                <a href="https://www.zomato.com/id/jakarta/makan-siang" className="column ta-center start-categories-item">
                    <img src={"https://b.zmtcdn.com/images/search_tokens/app_icons/special_10.png?output-format=webp"} data-original={"https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp"} height={48} width={48} display="inline-block"/>
                    <div className="text-nowrap">Desserts & Bakes</div>
                </a>
              </MDBCol>
            </MDBRow>
          </div>

           <div className="mt-5 pt-5 mb-5 pb-5">
            <MDBRow>
              <MDBCol>
                <h5 className="font-weight-bold">Top Reviewrs in Bandung</h5>
                <MDBCardBody className="table-light"> 
                  <MDBCardText>
                    <p> Bambang </p>
                    <p> Samsul </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
              <MDBCol>
                 <h5 className="font-weight-bold">Top Photographer in Bandung</h5>
                <MDBCardBody className="table-light"> 
                  <MDBCardText>
                    <p> Bambang </p>
                    <p> Samsul </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>
      );
   }
}

export class LandFooter extends React.Component {
  render () {
    return (
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6" className="pl-5">
              <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
  }
}

