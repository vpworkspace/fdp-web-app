import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class FlexPayChart extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: false,
			axisY: {
				title: "in GBP",
				prefix: "%",
				suffix: "0"

			},
			toolTip: {
				shared: false,
				reversed: true
			},
			legend: {
				verticalAlign: "center",
				horizontalAlign: "right",
				reversed: true,
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [
			{
				type: "stackedColumn",
				name: "Interest",
				showInLegend: true,
				yValueFormatString: "#,###",
				dataPoints: [
					{ label: "Old", y: 45 },
					{ label: "New", y: 48 },

				]
			},
			{
				type: "stackedColumn",
				name: "Principal",
				showInLegend: true,
				yValueFormatString: "#,###",
				dataPoints: [
					{ label: "Old", y: 55 },
					{ label: "New", y: 52 },
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default FlexPayChart;