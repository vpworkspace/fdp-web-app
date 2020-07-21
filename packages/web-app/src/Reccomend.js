import React, { Component } from 'react';
import DoughnutChart from "./views/DoughnutChart";
import SchduledPayments from "./SchduledPayments"
import Banner from "./Banner"
import './App.css';
class Reccomend extends Component {
  
  render() {    
    return (
      <div className="root">
        <div class="rowC">
		<div class="colC">
		      <h1 className="h2"> Reccomendations:  Extend Terms or Payment Holiday </h1>
		     <DoughnutChart/>
		     <SchduledPayments/>
		</div>

		</div>
	  </div>
    );
  }
}

export default Reccomend;