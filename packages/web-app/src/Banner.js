import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
} from '@openbanking/ui-data/lib/services/account-service'

import './App.css';
class Banner extends Component {

  render() {
    const dispatch = useDispatch()
    const history = useHistory();
    return (
		<div class="medbox">
             <button onClick={() => history.push('aisp')} > Summary </button> >>
                        <button onClick={() => history.push('reccomend')} > Reccomend </button> >>
                         <button onClick={() => history.push('illustrate')} > Illustrate </button>
		</div>
    );
  }
}

export default Banner;