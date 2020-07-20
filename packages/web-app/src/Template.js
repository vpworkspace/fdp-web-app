import React, { Component } from 'react';
import DoughnutChart from "./views/DoughnutChart";
import './App.css';
class Template extends Component {
  
  render() {    
    return (
		<div class="medbox">
      <DoughnutChart/>
		</div>
    );
  }
}

export default Template;