import React, { Component } from 'react';
import './App.css';
import DevTools from 'mobx-react-devtools';
import { observable} from "mobx";
import { observer } from "mobx-react";
import Box from './components/Box';
import Tooltip from './components/Tooltip';

@observer
class App extends Component {
  @observable children = [];

  @observable showTooltip = false;

  addChild = (child) => {
    if (child.type === 'box' && "undefined" === typeof child.color) {
      child.color = '#FFA500';
    }
    this.children.push(child);
  }

  toggleTooltip = (state) => {
    this.showTooltip = state;
  }

  render() {
    const tooltip = <Tooltip visible={this.showTooltip} callback={this.addChild} />
    var childrenList = this.children.map(function(child, i) {
      return (child.type === 'box') ? <Box elem={child} key={i} /> : '';
    })

    return (
        <div className="App">
          <DevTools />
          <div className="container">
            {childrenList}
            <div className="add-wrapper">
              {tooltip}
              <label className="add" onMouseEnter={() => this.toggleTooltip(true)} onMouseLeave={() => this.toggleTooltip(false)}>Add</label>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
