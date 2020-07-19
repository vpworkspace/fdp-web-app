import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class DoughnutChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Recommendation: Payment holiday",
				fontFamily: "Calibri"
			},
			subtitles: [{
				text: "Income/Expenditure",
				verticalAlign: "center",
				fontSize: 25,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Housing", y: 5 },
					{ name: "Debt Repayment", y: 31 },
					{ name: "Life", y: 40 },
					{ name: "Savings", y: 17 },
					{ name: "Tansportation", y: 7 }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DoughnutChart;