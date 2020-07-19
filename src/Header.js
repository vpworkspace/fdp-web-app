import React from 'react';
import './App.css';
import logo from './natwest.jpg';

export default function Header() {
    return (
        <div className='rowC'>
            <div className="App">
                FLex Debt Planner
            </div>
            <div>
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
            <div className="App">
                Welcome John! 
            </div>
        </div>
        )
}