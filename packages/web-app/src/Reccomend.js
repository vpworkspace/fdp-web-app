import React, { Component } from 'react';
import DoughnutChart from "./views/DoughnutChart";
import SchduledPayments from "./SchduledPayments"
import { Link } from 'react-router-dom';
import './App.css';
class Reccomend extends Component {
  
  render() {    
    return (
      <div className="root">
        <div class="rowC">
		<div class="colC">
		      <h1 className="h3"> <Link to="/illustrate">Reccomendations:  Extend Terms or Payment Holiday </Link></h1>
		      <DoughnutChart/>
		     <SchduledPayments/>
		</div>

		</div>
	  </div>
    );
  }
}

export default Reccomend;