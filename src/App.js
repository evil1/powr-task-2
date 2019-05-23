import React, { Component } from 'react';
import './App.css';
import DevTools from 'mobx-react-devtools';
import Container from './components/Container';

class App extends Component {

  render() {

    return (
        <div className="App">
          <DevTools />
          <div className="wrapper">
            <Container isRoot={true} />
          </div>
        </div>
    );
  }
}

export default App;
