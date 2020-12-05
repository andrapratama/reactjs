import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    nama: 'Andra',
    dataArray: ['Andra', 'Pratama'],
    umur: 26
  }

  render() {
    const { nama, dataArray, umur } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {nama}
          <br />
          {dataArray.map(single => single)}
          <br />
          {umur}
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
