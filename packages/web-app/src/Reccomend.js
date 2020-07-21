import React, { Component } from 'react'
import DoughnutChart from './views/DoughnutChart'
import SchduledPayments from './SchduledPayments'
import { Link } from 'react-router-dom'
import './App.css'
import hand from './pointer.gif'
class Reccomend extends Component {
    render() {
        return (
            <div className="root">
                <div class="rowC">
                    <div class="colC">
                        <h1 class="h4">
                            {' '}
                            <Link to="/fdp">Account Details</Link> &nbsp;>&nbsp;
                            <Link to="/reccomend">
                                <span class="Selected-link">
                                    Recommendation
                                </span>
                            </Link>{' '}
                            &nbsp;>&nbsp;{' '}
                            <Link to="/illustrate">Illustration</Link>{' '}
                        </h1>
                        <div class="rowC">
                            <Link to="/illustrate">
                                <h3>Extend Terms or Payment Holiday!</h3>
                            </Link>
                            <img src={hand} className="pointer" alt="logo" />
                        </div>
                        <DoughnutChart />
                        <SchduledPayments />
                    </div>
                </div>
            </div>
        )
    }
}

export default Reccomend
