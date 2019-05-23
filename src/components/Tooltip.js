import React, {Component} from 'react';

class Tooltip extends Component {
    state = {
        hover: false
    }

    toggleHover = (state) => {
        this.setState({hover: state})
    }

    addBox = () => {
        this.props.callback({type: 'box'})
    }

    addContainer = () => {
        this.props.callback({type: 'container'})
    }

    render() {
        return (
            <div onMouseEnter={() => this.toggleHover(true)} onMouseLeave={() => this.toggleHover(false)} className="tooltip" style={{display: (this.props.visible || this.state.hover) ? 'block' : 'none'}}>
                <button onClick={this.addBox}>Box</button>
                <button  onClick={this.addContainer}>Container</button>
            </div>
        )
    }
}

export default Tooltip;