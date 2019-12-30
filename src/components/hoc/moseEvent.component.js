import React from 'react';
import Hoc from './hoc.component'
function MouseEvent(props) {
    console.log("props : ", props);
    return (
        <div style={{ marginTop: 10, width: '50%' }}>
            <div style={{ backgroundColor: 'cornflowerblue' }} onMouseMove={props.incrementCount}>Mouse Count {props.count.count}</div>
        </div>
    )
}

export default Hoc(MouseEvent);