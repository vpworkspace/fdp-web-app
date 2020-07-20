import React, { Component }  from 'react';
import './App.css';
import AccountList from './AccountList'
import SchduledPayments from './SchduledPayments'
import Template from './Template';
class Fdp extends Component {
  render() {    
    return (
      <>
        <div className='Root'>
            <div className='rowC'>
              <AccountList/>
              <div className='colC'>
                <Template/>
                <SchduledPayments/>
              </div>
            </div>
        </div>
      </>
    );
  }
}
export default Fdp;