import React, {Component} from 'react';
import { observable} from "mobx";
import { observer } from "mobx-react";

@observer
class Box extends Component {

    @observable color = this.props.elem.color;

    updateColor = (event) => {
        this.color = event.target.value;
    }

    render() {
        return (
            <input type="color" className="box" value={this.color} onChange={this.updateColor}/>
        )
    }
}

export default Box