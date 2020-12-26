import React from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentKu from './componentKu'

class App extends React.Component {
    state = {
        pekerjaan: 'software enginer',
        umur: 23,
        tempatTinggal: 'Medan',
        merk: 'eiger',
        laptop: 'asus',
        hobi: 'sepakbola'
    }
    render() {
        const { pekerjaan, umur, tempatTinggal } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <ComponentKu {... this.state} />
                </header>
            </div>
        )
    }
}

export default App;