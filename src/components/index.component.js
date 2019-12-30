import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../action/CurdAction'

class Index extends Component {

    constructor(props){
        super(props)
        console.log("data : ", this.props.reduxState);
    }
    render() {
        return (
            <div>
               {this.props.reduxState && this.props.reduxState.length? <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <th style={{ 'paddingRight': "60px", border: '1px solid #423e3e' }}>Firstname</th>
                            <th style={{ 'paddingRight': "60px", border: '1px solid #423e3e' }}>Lastname</th>
                            <th style={{ 'paddingRight': "60px", border: '1px solid #423e3e' }}>Address</th>
                            <th style={{ 'paddingRight': "60px", border: '1px solid #423e3e' }}>Action</th>
                        </tr>
                        {this.props.reduxState && this.props.reduxState.map(i => <tr key={i.id}><td style={{ 'paddingRight': "60px", border: '1px solid #423e3e' }}>{i.fist_name}</td><td style={{ 'paddingRight': "60px", border: '1px solid #423e3e' }}>{i.last_name}</td><td style={{ 'paddingRight': "60px", border: '1px solid #423e3e' }}>{i.address}</td>
                            <td style={{ 'paddingRight': "60px", border: '1px solid #423e3e' }}><span value={i.id} onClick={() => this.delete(i.id)}>DELETE</span></td></tr>)}
                    </tbody>
                </table>:null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reduxState: state.records
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (value) => {
            dispatch(add(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);