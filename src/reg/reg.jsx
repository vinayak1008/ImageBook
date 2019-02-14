import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './reg.css';

class Registration extends Component {
    constructor() {
        super();
        this.state = { email : '', pass : '', visibility: false }
    }
    render() {
        return (
            <div className="reg-form">
                <div className="top">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h2 className="display-4">ImageBook</h2>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                        <div className="sign-in">
                            <div>
                                <p>Email or Phone </p>
                                <input onBlur={this.onBlur} type="text" id="myText" value={this.state.email} onChange={this.controlInput}/> 
                                {this.state.toggleView && <p className="user">An email or username is required to log in.</p>}
                            </div>
                            <div>
                                <p>Password</p>
                                <input onBlur={this.onBlur} type="password" id="myText" value={this.state.pass} onChange={this.controlInput1}/>
                                
                                {this.state.toggleView && <p className="user">A password required to log in.</p>}
                            </div>

                            <div className="click">
                                <button onClick={this.handleLogin}>
                                    <Link to="/homepage" className="link-page">
                                        LogIn
                                    </Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration;