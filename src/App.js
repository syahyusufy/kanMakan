import React, { Component } from "react";
import './css/index.css';
import { LandContent } from "./components/Landingpage";
import LandHeader from "./components/LandHeader";

class App extends React.Component {
   componentDidMount(){
      console.log(this.props.history);
   }

   render() {
      return (
         <div className="background">
            <LandHeader history={this.props.history}/>
            <LandContent/>
         </div>
      );
   }
}

export default App;

