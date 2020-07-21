import React, { Component } from 'react'
import DoughnutChart from './views/DoughnutChart'
import './App.css'
import SchduledPayments from './SchduledPayments'
import Grid from '@material-ui/core/Grid'

class Template extends Component {
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={6} spacing={3}>
                    <SchduledPayments />
                </Grid>
                <Grid item xs={6} spacing={3}>
                    <DoughnutChart />
                </Grid>
            </Grid>
        )
    }
}

export default Template
