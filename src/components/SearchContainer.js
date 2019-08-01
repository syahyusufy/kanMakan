import React,{Component} from 'react';
import Content from './Content';
import axios from 'axios'
import { MDBContainer } from "mdbreact";
import {  MDBBtn, 
          MDBCol, 
          MDBRow, 
          MDBIcon, 
          MDBCard,
          MDBCardBody,
          MDBCardFooter
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

	      axios.post("http://192.168.1.9:8000/api/search",{
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
            <MDBRow className="mt-3 pt-3">
            	<div>
            		<h3 className="font-weight-bold">Restaurants in Bandung  matching "{this.state.keyword}"</h3>
            	</div>
            </MDBRow>
            <MDBRow className="mt-3">
            	<MDBCol size="3">
            		<p>pppppppppppppppp</p>
            	</MDBCol>
            	<MDBCol size="6">
            		{search}
            	</MDBCol>
            	<MDBCol size="3">
					<p>pppppppppppppppp</p>
            	</MDBCol>
             </MDBRow>
            </MDBContainer>
     </div>
	 );
	}
}

export default SearchContainer
