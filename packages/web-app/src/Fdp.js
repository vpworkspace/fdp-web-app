import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import AccountList from './AccountList'
import SchduledPayments from './SchduledPayments'
import Template from './Template'
import { getAccountList } from '@openbanking/ui-data/lib/services/account-service'

class Fdp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: '',
        }
    }
    /*getData(){
    setTimeout(() => {getAccountList(useDispatch());}, 1000)
  }*/
    componentDidMount() {
        console.log('test in FDP')
        /*this.getData();*/
    }

    render() {
        return (
            <>
                <div className="Root">
                    <div className="rowC">
                        <AccountList />
                    </div>
                </div>
            </>
        )
    }
}
export default Fdp
