import React, { Component } from 'react';
import Click from './click.component'
import MouseEvent from './moseEvent.component'

class Create extends Component {
    constructor(props) {
        super(props);
        console.log("ok");
    }

    render() {
        return (
            <div style={{ marginTop: 10, width: '50%' }}>
                Hoc Example
                <Click/>
                <MouseEvent/>
            </div>
        )
    }
}

export default Create;