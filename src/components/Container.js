import React, {Component} from 'react';
import Tooltip from './Tooltip';
import Box from './Box';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import ColourNameToHex from '../helpers/ColorHelper';

@observer
class Container extends Component {

    @observable items = this.props.items;

    @observable showTooltip = false;

    isRoot = this.props.isRoot;

    addChild = (child) => {
        if (child.type === 'box' && "undefined" === typeof child.color) {
            child.color = '#ff8c00';
        }
        this.items.push(child);
    }

    removeFromList = () => {
        this.props.removeCallback(this.props.index)
    }

    removeChild = (index) => {
        this.items.splice(index, 1);
    }

    toggleTooltip = (state) => {
        this.showTooltip = state;
    }

    render() {
        const tooltip = <Tooltip visible={this.showTooltip} callback={this.addChild} />
        if ("undefined" !== typeof this.items) {
            const childrenList = this.items.map(function (child, i) {
                let component = '';

                if (child.type === 'box') {
                    let box = {
                        type: 'box',
                        color: ("undefined" !== typeof child.color)  ? ColourNameToHex(child.color) : '#ff8c00'
                    }
                    component = <Box elem={box} key={i} index={i} removeCallback={this.removeChild}/>;
                } else {
                    component = <Container items={child.items} key={i} index={i} removeCallback={this.removeChild}/>;
                }

                return component;
            }, this)
            const remove = (!this.isRoot) && <label className="remove" onClick={this.removeFromList}>Remove</label>

            return (
                <div className="container">
                    {childrenList}
                    <div className="add-wrapper">
                        {tooltip}
                        <label className="add" onClick={() => this.toggleTooltip(true)}
                               onMouseEnter={() => this.toggleTooltip(true)}
                               onMouseLeave={() => this.toggleTooltip(false)}>Add</label>
                        {remove}
                    </div>
                </div>
            )
        } else {
            return '';
        }
    }
}

export default Container