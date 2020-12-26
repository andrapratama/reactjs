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
        hobi: 'sepakbola',
        data: '',
        angka: 0
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { pekerjaan, umur, tempatTinggal } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <input
                        type="text"
                        value={this.state.data}
                        onChange={this.changeHandler}
                        name="data"
                    />
                    <input
                        type="number"
                        value={this.state.angka}
                        onChange={this.changeHandler}
                        name="angka"
                    />
                    <ComponentKu hasilKu={this.state.data} angkaKu={this.state.angka} />
                </header>
            </div>
        )
    }
}

export default App;