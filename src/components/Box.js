import React, {Component} from 'react';
import RemoveTooltip from './RemoveTooltip';
import { observable} from "mobx";
import { observer } from "mobx-react";

@observer
class Box extends Component {

    @observable color = this.props.elem.color;

    @observable showTooltip = false;

    toggleTooltip = (state) => {
        this.showTooltip = state;
    }

    updateColor = (color) => {
        this.color = color;
    }

    removeFromList = () => {
        this.props.removeCallback(this.props.index)
    }

    render() {
        const tooltip = <RemoveTooltip color={this.color} visible={this.showTooltip} callback={this.removeFromList} colorCallback={this.updateColor} />
        return (
            <div className="box-wrapper" style={{backgroundColor: this.color}} onMouseEnter={() => this.toggleTooltip(true)} onMouseLeave={() => this.toggleTooltip(false)}>
                {tooltip}
            </div>
        )
    }
}

export default Box;