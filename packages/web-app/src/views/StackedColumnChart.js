import React, { Component } from 'react'
import CanvasJSReact from '../assets/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

class StackedColumnChart extends Component {
    constructor() {
        super()
        this.toggleDataSeries = this.toggleDataSeries.bind(this)
    }
    toggleDataSeries(e) {
        if (
            typeof e.dataSeries.visible === 'undefined' ||
            e.dataSeries.visible
        ) {
            e.dataSeries.visible = false
        } else {
            e.dataSeries.visible = true
        }
        this.chart.render()
    }
    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            axisY: {
                title: 'in GBP',
                prefix: '£',
                suffix: '0',
            },
            toolTip: {
                shared: true,
                reversed: true,
            },
            legend: {
                verticalAlign: 'center',
                horizontalAlign: 'right',
                reversed: true,
                cursor: 'pointer',
                itemclick: this.toggleDataSeries,
            },
            data: [
                {
                    type: 'stackedColumn',
                    name: 'Ulster',
                    showInLegend: true,
                    yValueFormatString: '#,###',
                    dataPoints: [
                        { label: 'Jul', y: 25 },
                        { label: 'Aug', y: 25 },
                        { label: 'Sep', y: 25 },
                    ],
                },
                {
                    type: 'stackedColumn',
                    name: 'RBS',
                    showInLegend: true,
                    yValueFormatString: '#,###',
                    dataPoints: [
                        { label: 'Jul', y: 80 },
                        { label: 'Aug', y: 80 },
                        { label: 'Sep', y: 80 },
                    ],
                },
                {
                    type: 'stackedColumn',
                    name: 'Natwest',
                    showInLegend: true,
                    yValueFormatString: '#,###',
                    dataPoints: [
                        { label: 'Jul', y: 10 },
                        { label: 'Aug', y: 20 },
                        { label: 'Sep', y: 30 },
                    ],
                },
            ],
        }

        return (
            <div>
                <CanvasJSChart
                    options={options}
                    onRef={(ref) => (this.chart = ref)}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        )
    }
}

export default StackedColumnChart
