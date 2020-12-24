import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    nama: "",
    umur: ""
  }

  changeHandler = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { nama, umur } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input
            type="text"
            value={nama}
            name="nama"
            onChange={this.changeHandler}
          />
          <h3>{nama}</h3>
          <br />
          <input
            type="text"
            value={umur}
            name="umur"
            onChange={this.changeHandler}
          />
          <h3>{umur}</h3>
          <br />
        </header>
      </div>
    )
  }
}

/*
// stateless
function App() {
  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
  );
}
*/

export default App;
