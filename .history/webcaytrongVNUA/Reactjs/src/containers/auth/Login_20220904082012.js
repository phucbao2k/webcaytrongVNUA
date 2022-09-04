import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';



class Login extends Component {
    constructor(props) {
        super(props);
      
    }

   

    render() {
      

        return (
          <div className="login-background">
            <div className="login-container">
                <div className="login-content row">
                    
                    <div className="col-12 text-center">Login </div>
                    <div className="col-12 form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" placeholder="Enter your username"></input>
                    </div>
                    <div className="col-12 form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter your password"></input>
                    </div>
                    <button>Login</button>
                    <div></div>
                </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
