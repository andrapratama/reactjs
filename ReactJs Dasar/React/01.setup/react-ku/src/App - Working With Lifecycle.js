import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    data: ""
  }

  changeHandler = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    })
  }

  // mengambil data json saat halaman pertama kali di load
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => this.setState({
        data: res
      }));
  }

  render() {
    const { data } = this.state;
    console.log({ data });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {data ? data.map(datum => {
            const { title, userId } = datum
            return (
              <p key={userId + title}>
                {title} {userId}
              </p>
            )
          }) : (
              <h1>Loading...</h1>
            )}
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
