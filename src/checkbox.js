import React, { Component } from 'react';

export class Checkbox extends Component {
    state = { checked: false }

    handleChecked = () => {
        this.setState({ checked: !this.state.checked });
    }
    render() {
        var msg;
        msg = this.state.checked ? 'checked' : 'unchecked';
        return (
            <div>
                <h2>Play with a checkbox</h2>
                <input type='checkbox' onChange={this.handleChecked} defaultChecked={this.state.checked} />
                <h3>Checkbox is "{msg}"</h3>
                <br />
            </div>
        );
    }
}