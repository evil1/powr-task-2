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

    render() {
        return (
            <div onMouseEnter={() => this.toggleHover(true)} onMouseLeave={() => this.toggleHover(false)} className="tooltip-remove" style={{display: (this.props.visible || this.state.hover) ? 'block' : 'none'}}>
                <button onClick={this.remove}>Remove</button>
            </div>
        )
    }
}

export default RemoveTooltip;