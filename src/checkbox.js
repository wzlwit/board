import React, { Component } from 'react';

export class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleChecked = this.handleChecked.bind(this);
    }
    handleChecked() {
        this.setState({ checked: !this.state.checked });
    }
    render() {
        var msg;
        msg = this.state.checked ? 'checked' : 'unchecked';
        return (
            <div>
                <br />
                <h2>Play with a checkbox</h2>
                <input type='checkbox' onChange={this.handleChecked} defaultChecked={this.state.checked} />
                <h3>Checkbox is "{msg}"</h3>
            </div>
        );
    }
}