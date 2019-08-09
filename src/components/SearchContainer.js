import React,{Component} from 'react';
import Content from './Content';
import axios from 'axios'
import { MDBContainer } from "mdbreact";
import {  MDBBtn, 
          MDBCol, 
          MDBRow, 
          MDBIcon, 
          MDBCard,
          MDBCardTitle,
          MDBCardBody,
          MDBCardFooter,
          MDBCardImage,
          MDBCardText,
          MDBInput
        } from "mdbreact";
import "../index.css";

class SearchContainer extends Component{
	constructor(){
		super()
		this.state={
			keyword:'',
			city:1,
			items:[],
			cities:[]
		}

		this.handleSubmit = this.getRestaurant.bind(this);
		this.getCity = this.getCity.bind(this);
	}

	componentDidMount(){
		this.setState(() => ({ keyword : this.props.match.params.keyword }));
		console.log(this.props.match.params.keyword);
        this.getRestaurant();
	}
	
	componentDidUpdate(prevProps) {
		if (prevProps.match.params.keyword !== this.props.match.params.keyword) {
			this.setState(() => ({ keyword : this.props.match.params.keyword }));
			this.getRestaurant();
		}
	  }

	getCity(){
		axios
		.get("http://localhost:8000/api/city",{
			headers: {'Content-Type': 'application/json'}
		})
		.then(res => {
			this.setState(() => ({ cities : res.data }));
	        console.log(this.state.cities);
		})
	}

	getRestaurant() {

		this.setState(() => ({ 
	      items: []   
	    }));

	    console.log(this.state.keyword);

	      axios.post("http://192.168.1.16:8000/api/search",{
	          keyword : this.props.match.params.keyword,
	          city : this.state.city
	      })
	     .then( (response) => {
	        this.setState(() => ({ items : response.data }));
			console.log(this.state.items);
			console.log(this.state.keyword);
	      })
	     .catch( (error) => {
	          console.log(error);
	      });  
	    
	  }

	render(){
	const search = this.state.items.map((search, index) => (
      <Content
        key = {index}
        search = {search}
      />
    ));


	 return(
        <div className="font mt-5 mb-5">
            <MDBContainer key="search">
            <MDBRow className="mt-3 pt-3 ml-0">
            	<div>
            		<h3 className="font-weight-bold">Restaurants in Bandung  matching "{this.state.keyword}"</h3>
            	</div>
            </MDBRow>
            <MDBRow className="mt-3">
            	<MDBCol size="2 pr-5">
            		<MDBCard style={{ width: "14rem" }}>
	            		<MDBCardBody className="font-filter">
            				<h5 className="font-weight-bold">Filter</h5>
	            			<div>
	            				<h6 className="font-weight-bold">Sort by</h6>
            					<div><a>Popularity - high to low</a></div>
	            				<div>Rating - high to low</div>
	            				<div>Cost - high to low</div>
	            				<div>Recently Added - new to old</div>
	            			</div><br/>
	            			<div>
	            				<h6 className="font-weight-bold">Locations</h6>
            					<div>Buah Batu</div>
	            				<div>Antapani</div>
	            				<div>Riau</div>
	            				<div>Dago</div>
	            				<div>see all Locations</div>
	            			</div><br/>
	            			<div>
	            				<h6 className="font-weight-bold">Cuisine</h6>
            					<div>Coffee</div>
	            				<div>Western</div>
	            				<div>Tea</div>
	            				<div>Desserts</div>
	            				<div>Street Food</div>
	            				<div>Asian</div>
	            				<div>Japanese</div>
	            				<div>See all cuisines</div>
	            			</div><br/>		
	            			<div>
	            				<h6 className="font-weight-bold">Establishment Type</h6>
            					<div>Quick Bites</div>
	            				<div>Food Courts</div>
	            				<div>Casual Dinin</div>
	            				<div>Cafés</div>
	            				<div>Kiosks</div>
	            				<div>Beverage Shops</div>
	            				<div>Street Vendors</div>
	            				<div>Bars</div>
	            				<div>Dessert Parlor</div>
	            				<div>Bakeries</div>
	            				<div>See all cuisines</div>
	            			</div><br/>
	            			<div>
	            				<h6 className="font-weight-bold">Cost for two</h6>
            					<div>Less than Rp80.000</div>
	            				<div>Rp80.000 to Rp150.000</div>
	            				<div>Rp150.000 to Rp400.000</div>
	            				<div>Rp400.000 +</div>
	            			</div><br/>
	            		</MDBCardBody>
            		</MDBCard>
            	</MDBCol>
            	<MDBCol size="6 pl-5">
            		{search}
            	</MDBCol>
            	<MDBCol size="4 pl-2 mr-0">
            		<MDBRow className="pl-3 pb-2">
				       	<div id="map-container-google-2" class="z-depth-1-half">
						  <iframe src="https://maps.google.com/maps?q=bandung&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen width={333} height={100}></iframe>
						</div>
            		</MDBRow>
            		<MDBRow className="pl-3 pb-2">
            			<div>
            				<small className="font-weight-bold">SPONSORED & POPULAR</small>
            			</div>
            		</MDBRow>
            		<MDBRow className="pb-3">
            			<MDBCol className="pr-0">
            				<MDBCard className="mini-card">
						        <MDBCardImage className="img-fluid" src="https://media-cdn.tripadvisor.com/media/photo-s/09/fb/f8/4c/combo-2-with-bomb-rice.jpg" waves />
						        <MDBCardBody>
						          <div className="font-mini-card font-weight-bold">Wingz O Wingz</div>
						          <MDBCardText>
							          <div className="font-mini-card2">
							            <div>Dago,Bandung</div>
							            <div>Indonesia</div>
							          </div>
						          </MDBCardText>
						        </MDBCardBody>
					      	</MDBCard>
            			</MDBCol>
            			<MDBCol className="pl-0 pr-4">
            				<MDBCard className="mini-card">
						        <MDBCardImage className="img-fluid" src="https://media-cdn.tripadvisor.com/media/photo-s/09/fb/f8/4c/combo-2-with-bomb-rice.jpg" waves />
						        <MDBCardBody>
						          <div className="font-mini-card font-weight-bold">Wingz O Wingz</div>
						          <MDBCardText>
							          <div className="font-mini-card2">
							            <div>Dago,Bandung</div>
							            <div>Indonesia</div>
							          </div>
						          </MDBCardText>
						        </MDBCardBody>
					      	</MDBCard>
            			</MDBCol>
            		</MDBRow>
            		<MDBRow className="pb-3 font-mini-card">
            			<MDBCol className="pr-0">
            				<MDBCard className="mini-card">
						        <MDBCardImage className="img-fluid" src="https://tempatwisatadibandung.info/wp-content/uploads/2016/10/Miss-Bee-Providore-bandung-1280x720.jpg" waves />
						        <MDBCardBody>
						          <div className="font-mini-card font-weight-bold">Wingz O Wingz</div>
						          <MDBCardText>
							          <div className="font-mini-card2">
							            <div>Dago,Bandung</div>
							            <div>Indonesia</div>
							          </div>
						          </MDBCardText>
						        </MDBCardBody>
					      	</MDBCard>
            			</MDBCol>
            			<MDBCol className="pl-0 pr-4">
            				<MDBCard className="mini-card">
						        <MDBCardImage className="img-fluid" src="https://i2.wp.com/foodinloveid.com/wp-content/uploads/2018/12/featured-mie-rica-kejaksaan-braga-bandung.jpg?resize=672%2C372&ssl=1" waves />
						        <MDBCardBody>
						          <div className="font-mini-card font-weight-bold">Wingz O Wingz</div>
						          <MDBCardText>
							          <div className="font-mini-card2">
							            <div>Dago,Bandung</div>
							            <div>Indonesia</div>
							          </div>
						          </MDBCardText>
						        </MDBCardBody>
					      	</MDBCard>
            			</MDBCol>
            		</MDBRow>
            		<MDBRow className="pb-3 font-mini-card">
            			<MDBCol className="pr-0">
            				<MDBCard className="mini-card">
						        <MDBCardImage className="img-fluid" src="https://3.bp.blogspot.com/-EbR1uNaa7mQ/W8Xu-2VINBI/AAAAAAAACQY/xZkpoMZmWBsEwm8qcd8M3SeU2cfnvTUuACLcBGAs/s640/Braga%2BPermai%2B6.jpg" waves />
						        <MDBCardBody>
						          <div className="font-mini-card font-weight-bold">Wingz O Wingz</div>
						          <MDBCardText>
							          <div className="font-mini-card2">
							            <div>Dago,Bandung</div>
							            <div>Indonesia</div>
							          </div>
						          </MDBCardText>
						        </MDBCardBody>
					      	</MDBCard>
            			</MDBCol>
            			<MDBCol className="pl-0 pr-4">
            				<MDBCard className="mini-card">
						        <MDBCardImage className="img-fluid" src="https://anakjajan.files.wordpress.com/2016/08/dscf1294.jpg?w=474&h=316" waves />
						        <MDBCardBody>
						          <div className="font-mini-card font-weight-bold">Wingz O Wingz</div>
						          <MDBCardText>
							          <div className="font-mini-card2">
							            <div>Dago,Bandung</div>
							            <div>Indonesia</div>
							          </div>
						          </MDBCardText>
						        </MDBCardBody>
					      	</MDBCard>
            			</MDBCol>
            		</MDBRow>
            	</MDBCol>
             </MDBRow>
             </MDBContainer>
         </div>
	 );
	}
}

export default SearchContainer;
