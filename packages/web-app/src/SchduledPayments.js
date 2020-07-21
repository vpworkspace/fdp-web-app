import React from 'react'
import './App.css'
import StackedColumnChart from './views/StackedColumnChart'

export default function SchduledPayments() {
    return (
        <div>
            <h1 className="h2">Upcoming Scheduled Payments/DD/SO...</h1>
            <StackedColumnChart />
        </div>
    )
}
