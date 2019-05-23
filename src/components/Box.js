import React, {Component} from 'react';
import RemoveTooltip from './RemoveTooltip';
import { observable} from "mobx";
import { observer } from "mobx-react";
import Tooltip from "./Container";

@observer
class Box extends Component {

    @observable color = this.props.elem.color;

    @observable showTooltip = false;

    toggleTooltip = (state) => {
        this.showTooltip = state;
    }

    updateColor = (event) => {
        this.color = event.target.value;
    }

    removeFromList = () => {
        this.props.removeCallback(this.props.index)
    }

    render() {
        const tooltip = <RemoveTooltip visible={this.showTooltip} callback={this.removeFromList} />
        return (
            <div className="box-wrapper" onMouseEnter={() => this.toggleTooltip(true)} onMouseLeave={() => this.toggleTooltip(false)}>
                {tooltip}
                <input type="color" className="box" value={this.color} onChange={this.updateColor}/>
            </div>
        )
    }
}

export default Box