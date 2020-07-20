import React from 'react'
import './WebApp.css'
import logo from './natwest.jpg';

export default function Header() {
    return (
        <div className='rowCHeader'>
        <div>
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        <div className="App">
            Flex Debt Planner
        </div>
    </div>
        
    )
}