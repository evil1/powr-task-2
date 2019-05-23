import React, { Component } from 'react';
import './App.css';
import DevTools from 'mobx-react-devtools';
import { observable} from "mobx";
import { observer } from "mobx-react";
import Box from './components/Box';

@observer
class App extends Component {
  @observable children = [
    { type: 'box', color: '#FF0000' }
  ];

  add = () => {
    this.count++;
  }

  dec = () => {
    this.count--;
  }

  render() {
    var childrenList = this.children.map(function(child, i) {
      return (child.type === 'box') ? <Box elem={child} key={i} /> : '';
    })

    return (
        <div className="App">
          {childrenList}
          <DevTools/>
          <button onClick={this.dec}>-1</button>
          <h1>{this.count}</h1>
          <button onClick={this.add}>+1</button>
        </div>
    );
  }
}

export default App;
