import logo from './logo.svg';
import './App.css';
import './styleku.css';

// internal styling
const styleKu = {
  backgroundColor: "blue"
}

function App() {
  return (
    <div className="App">
      {/* <header className="stylingku"> gunakan jika pakai styleku*/}
      {/* <header style={{ backgroundColor: "blue" }}> style inline */}
      {/* <header style={styleKu}>  akses style inline*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ini header</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
