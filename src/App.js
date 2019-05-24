import React, { Component } from 'react';
import './App.css';
import DevTools from 'mobx-react-devtools';
import Container from './components/Container';
import { observable } from "mobx";
import { observer} from "mobx-react";

@observer
class App extends Component {

  // @observable items = [
  //     {type: 'box'},
  //     {type: 'container', items:[
  //       {type: 'box', color: 'green'},
  //       {type: 'box', color: 'red'}
  //     ]}
  // ];

  @observable items = [];

  itemsJson = '';

  parseItems = (event) => {
    this.itemsJson = event.target.value;
  }

  applyItems = () => {
    let rootItem = JSON.parse(this.itemsJson);
    this.items.replace(rootItem.items);
  }

  render() {
    return (
        <div className="App">
          <DevTools />
          <div className="wrapper">
            <Container isRoot={true} items={this.items}/>
          </div>
          <h1>Container description</h1>
          <div className="json">
            <textarea rows="10" cols="50" onChange={this.parseItems}></textarea>
            <button onClick={this.applyItems}>Build</button>
          </div>
        </div>
    );
  }
}

export default App;
