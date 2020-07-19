import React, { Component }  from 'react';
import './App.css';
import Header from './Header'
import AccountList from './AccountList'
import SchduledPayments from './SchduledPayments'
import Template from './views/Template';
class App extends Component {
  render() {    
    return (
      <>
        <div className='Root'>
          <Header/>
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
export default App;
