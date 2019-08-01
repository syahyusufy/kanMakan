import React,{Component} from 'react';
import Content from './Content';
import axios from 'axios'
import { MDBContainer } from "mdbreact";
<<<<<<< HEAD
import {  MDBBtn, 
          MDBCol, 
          MDBRow, 
          MDBIcon, 
          MDBCard,
          MDBCardBody,
          MDBCardFooter
        } from "mdbreact";
import "../index.css";
=======
>>>>>>> refs/remotes/origin/master

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
<<<<<<< HEAD
			this.setState(() => ({ keyword : this.props.match.params.keyword }));
			this.getRestaurant();
=======
		  this.getRestaurant();
>>>>>>> refs/remotes/origin/master
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

<<<<<<< HEAD
	      axios.post("http://192.168.1.9:8000/api/search",{
=======
	      axios.post("http://127.0.0.1:8000/api/search",{
>>>>>>> refs/remotes/origin/master
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
<<<<<<< HEAD
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
=======
        <div className="mt-5 mb-5">
            <MDBContainer key="search">
                {search}
>>>>>>> refs/remotes/origin/master
            </MDBContainer>
     </div>
	 );
	}
}

export default SearchContainer
