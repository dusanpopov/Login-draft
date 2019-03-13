import React, { Component } from 'react';

class RegisterBox extends Component {

constructor(props){
    super(props);

    this.state = {

        username:"",
        password:"",
        email:"",

        errors:[],
        pwdState: null
    };
}

showValidationErr(element, message){
    this.setState((prevState) => ({errors: [...prevState.errors, {element, message}]}))
}

clearValidationErr(element){
    
    this.setState((prevState) => {

        let errorArr = [];

        for(let err of prevState.errors){
            if(element !== err.element){
                errorArr.push(err);
            }
        }

        return {errors: errorArr};

    });
}

    onUsernameChange(e){
        this.setState({
            username: e.target.value
        })

        this.clearValidationErr("username");
    }

    onPasswordChange(e){
        this.setState({
            password: e.target.value
        })
        this.clearValidationErr("password");

        this.setState({pwdState: "Weak"})

        if(e.target.value.length > 8){
            this.setState({pwdState: "Medium"})
        } else if (e.target.value.length > 12){
            this.setState({pwdState: "Strong" })
        }


    }
    onEmailChange(e){
        this.setState({
            email: e.target.value
        })
        this.clearValidationErr("email");
    }

     submitRegister(e){

        if(this.state.username === ""){
            this.showValidationErr("username", "Username cannot be empty");
        } if (this.state.email === ""){
            this.showValidationErr("email", "Email cannot be empty");
        } if (this.state.password === ""){
            this.showValidationErr("password", "Password cannot be empty");
        }
         
     }

  render() {

    let usernameErr = null;
    let passwordErr = null;
    let emailErr = null;

    for(let err of this.state.errors){
        if(err.element === "username"){
            usernameErr = err.message;
        } if (err.element === "password"){
            passwordErr = err.message;
        } if (err.element === "email"){

            emailErr = err.message;
        }
    }


    let pwdWeak = false;
    let pwdMedium = false;
    let pwdStrong = false;


    if(this.state.pwdState === "Weak"){
        pwdWeak = true;
    } else if (this.state.pwdState === "Medium"){
        pwdMedium = true;
    } else if (this.state.pwdState === "Strong"){
        pwdWeak = true;
        pwdMedium = true;
        pwdStrong = true;
    }

    return (
      <div className="inner-container">

      <div className="header">
        Register
      </div>

        <div className="box">
        
            <div className="input-group">

            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="login-input" placeholder="Username" onChange={this.onUsernameChange.bind(this)}></input>
            
            <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
            </div>

            <div className="input-group">

            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.onPasswordChange.bind(this)}></input>
            <small className="danger-error">{passwordErr ? passwordErr : ""}</small>
            </div>


            <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="login-input" placeholder="Email" onChange={this.onEmailChange.bind(this)}></input>
            <small className="danger-error">{emailErr ? emailErr : ""}</small>
            </div>


            {this.state.password && <div className="password-state">

            <div className={"pwd pwd-weak " + (pwdWeak ? "show" : "")}>
            </div>
            <div className={"pwd pwd-medium "  + (pwdMedium ? "show" : "")}>
            </div>
            <div className={"pwd pwd-strong "  + (pwdStrong ? "show" : "")}>
            </div>
            
            </div>}

            <button className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>
        </div>
        
      </div>
    )
  }
}

export default RegisterBox;