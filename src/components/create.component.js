import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../action/CurdAction';
import ViewComp from '../components/view.component';

class Create extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        //console.log("const == ", this.props.reduxState)
        this.state = { records: [] };
        this.uploadDoc = this.uploadDoc.bind(this);
    }

    uploadDoc(e) {
        ///const file = e.target.files[0];
        this.setState({ file: URL.createObjectURL(e.target.files[0]) })
    }

    onSubmit(e) {
        e.preventDefault();
        if (e.target[0].value && e.target[1].value && e.target[2].value) {
            //console.log(`The values are ${e.target[0].value}, ${e.target[2].value}, and ${e.target[1].value}`)
            this.props.setName({
                id: Math.floor(Math.random() * 99),
                fist_name: e.target[0].value,
                last_name: e.target[2].value,
                address: e.target[1].value
            })
            e.target[0].value = ""
            e.target[1].value = ""
            e.target[2].value = ""
        } else console.log("Error");
    }

    render() {
        console.log("render -== ", this.props.reduxState)
        return (
            <div style={{ marginTop: 10, width: '50%' }}>
                <h3>Employ Information</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <label>First Name</label>
                        <input
                            type="text"
                            //placeholder="your name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name </label>
                        <input type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Home Address: </label>
                        <input type="text"
                            className="form-control"
                        />
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Save Details" className="btn btn-primary" />
                    </div>

                </form>
                {/* <div style={{position:'relative', bottom:'53px', left:'66%'}} className="form-group">
                    <input type="submit" value="Traning Activity" className="btn btn-primary" />
                </div> */}
                <ViewComp />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    console.log("Props == ",props);
    return {
        reduxState: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (value) => {
            dispatch(add(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);