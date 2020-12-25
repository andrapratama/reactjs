import React from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentKu from './componentKu'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <ComponentKu pekerjaan="software enginer" umur="26" />
                </header>
            </div>
        )
    }
}

export default App;