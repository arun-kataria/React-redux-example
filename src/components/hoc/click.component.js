import React, { Component } from 'react';
import Hoc from './hoc.component';

function Click(props) {
    return (
        <div style={{ marginTop: 10, width: '50%' }}>
            <button onClick={props.incrementCount}>Click Count {props.count.count}</button>
        </div>
    )
}

export default Hoc(Click);