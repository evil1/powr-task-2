import React, {Component} from 'react';

class RemoveTooltip extends Component {
    state = {
        hover: false
    }

    toggleHover = (state) => {
        this.setState({hover: state})
    }

    remove = () => {
        this.props.callback()
    }

    updateColor = (event) => {
        this.props.colorCallback(event.target.value);
        this.setState({hover: false})
    }

    render() {
        return (
            <div onMouseEnter={() => this.toggleHover(true)} onMouseLeave={() => this.toggleHover(false)} className="tooltip-remove" style={{display: (this.props.visible || this.state.hover) ? 'block' : 'none'}}>
                <button onClick={this.remove}>Remove</button>
                <p>Change color</p>
                <input id="pkr" type="color" className="box" value={this.props.color} onChange={this.updateColor}/>
            </div>
        )
    }
}

export default RemoveTooltip;