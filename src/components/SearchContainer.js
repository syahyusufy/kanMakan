import React,{Component} from 'react';
import Content from './Content';
import axios from 'axios'
import { MDBContainer } from "mdbreact";

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

	      axios.post("http://127.0.0.1:8000/api/search",{
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
        <div className="mt-5 mb-5">
            <MDBContainer key="search">
                {search}
            </MDBContainer>
     </div>
	 );
	}
}

export default SearchContainer
