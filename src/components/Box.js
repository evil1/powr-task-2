import React, {Component} from 'react';

class Box extends Component {
    state = {
        color: this.props.elem.color
    }

    changeColor = () => {
        this.setState({color: '#FF0000'})
    }

    render() {
        return (
            <div className="box" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
        )
    }
}

export default Box