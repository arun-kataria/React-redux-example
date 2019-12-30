import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remove } from '../action/CurdAction'

class View extends Component {

    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this)
    }
    delete(id) {
        this.props.removeItem(id)
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
        removeItem: (value) => {
            dispatch(remove(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);