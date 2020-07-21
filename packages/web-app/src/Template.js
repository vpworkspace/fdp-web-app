import React, { Component } from 'react'
import DoughnutChart from './views/DoughnutChart'
import './App.css'
import SchduledPayments from './SchduledPayments'
import Grid from '@material-ui/core/Grid'

class Template extends Component {
    render() {
        return (
            <div>
                <SchduledPayments />
                <DoughnutChart />
            </div>
        )
    }
}

export default Template
