import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './reg.css';

class Registration extends Component {
    
state = {
    name: '',
    surname: '',
    email: '',
    password: '',
    checkBox: '',
    visibility: false
}

toggleView = () => {
    if(this.state.toggleView) {
        this.setState({visiblity: true})
    }
    else {
        this.setState({visibility: false})
    }
}
toggleViewSurname = () => {
    if(this.state.toggleView) {
        this.setState({visiblity: true})
    }
    else {
        this.setState({visibility: false})
    }
}
toggleViewMail = () => {
    if(this.state.toggleView) {
        this.setState({visiblity: true})
    }
    else {
        this.setState({visibility: false})
    }
}
toggleViewPass = () => {
    if(this.state.toggleView) {
        this.setState({visiblity: true})
    }
    else {
        this.setState({visibility: false})
    }
}

validateOnName = () => {
    if(this.state.name === ''){
        this.setState({toggleView: true})
       } 
       else {
           this.setState({toggleView: false})
       }
    
}
validateOnSurname = () => {
    if(this.state.surname === ''){
        this.setState({toggleViewSurname: true})
       } 
       else {
           this.setState({toggleViewSurname: false})
       }
}
validateOnEmail = () => {
    if(this.state.email === ''){
        this.setState({toggleViewMail: true})
       } 
       else {
           this.setState({toggleViewMail: false})
       }
}
validateOnPassword = () => {
    if(this.state.password !== ''){
        this.setState({toggleViewPass: false})
       } 
       else if(this.state.password.length < 8) {
           return "*Password needs to be more than 8 characters long";
       }
       else {
           this.setState({toggleViewPass: true})
       }
}

onNameInput = (e) => {
    this.setState({name: e.target.value})
}
onSurnameInput = (e) => {
    this.setState({surname: e.target.value})
}
onEmailInput = (e) => {
    this.setState({email: e.target.value})
}
onPasswordInput = (e) => {
    this.setState({password: e.target.value})
}
onCheckboxInput = (e) => {
    this.setState({checkBox: e.target.value})
}
    render() {
        return (
            <div className="reg-form">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h2 className="display-4">ImageBook</h2>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                <div className="signUp">
                    <form>
                   
                            <h2>Create a new account</h2>
                            <p>It's free and always will be.</p>
                        <form>
                            <div className="form-row">

                            <input className="form-control" 
                                type="text" 
                                value={this.state.name}
                                onChange={this.onNameInput}
                                onBlur={this.validateOnName}
                                placeholder="First name"/>
                                {this.state.toggleView && 
                                <p className="user">*name is required</p>}
                                
                                <input className="form-control" 
                                type="text" 
                                value={this.state.surname}
                                onChange={this.onSurnameInput}
                                onBlur={this.validateOnSurname}
                                placeholder="Surname"/>
                                {this.state.toggleViewSurname && 
                                <p className="user">*Surname is required</p>}

                            </div>
                                <div className="form-row">
                                    <input className="form-control" 
                                    type="text" 
                                    value={this.state.email}
                                    onChange={this.onEmailInput}
                                    onBlur={this.validateOnEmail}
                                    placeholder="Email" />
                                    {this.state.toggleViewMail && 
                                <p className="user">*Email is required</p>}

                                </div>
                                <div className="form-row">
                                    <input className="form-control" 
                                    type="text"
                                    value={this.state.password}
                                    onChange={this.onPasswordInput}
                                    onBlur={this.validateOnPassword} 
                                    placeholder="Password" />
                                    {this.state.toggleViewPass && 
                                    <p className="user">*password is required</p>}
                                </div>
                            </form> 
                            <div className="checkBox">         
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" for="inlineRadio2">Female</label>
                                </div>
                            </div>
                            <p className="active"><span>By clicking Sign Up, you agree to our Terms,</span> <span>Data Policy and Cookie Policy. You may receive SMS notifications
                                from us and can opt out at any time.</span>
                            </p>
                            <button className="submit">Sign Up</button>                   

                    </form>
                </div>
            </div>
        )
    }
}

export default Registration;