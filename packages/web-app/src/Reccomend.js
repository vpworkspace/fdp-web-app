import React, { Component } from 'react';
import DoughnutChart from "./views/DoughnutChart";
import Banner from "./Banner"
import './App.css';
class Reccomend extends Component {
  
  render() {    
    return (
		<div class="medbox">
		     <DoughnutChart/>
		</div>
    );
  }
}

export default Reccomend;