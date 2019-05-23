import React, {Component} from 'react';
import Tooltip from './Tooltip';
import Box from './Box';
import {observable} from "mobx";
import {observer} from "mobx-react";

@observer
class Container extends Component {

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
            return (child.type === 'box') ? <Box elem={child} key={i} /> : <Container key={i}/>;
        })

        return (
            <div className="container">
                {childrenList}
                <div className="add-wrapper">
                    {tooltip}
                    <label className="add" onMouseEnter={() => this.toggleTooltip(true)} onMouseLeave={() => this.toggleTooltip(false)}>Add</label>
                </div>
            </div>
        )
    }
}

export default Container