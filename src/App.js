import React, { Component } from 'react';
import './App.css';
import "./LoginBox";
import "./RegisterBox";
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {

      isLoginOpen: true,
      isRegisterOpen: false

    }
  }

  showLoginBox(){
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false,
    });
  }

  showRegisterBox(){
    this.setState({
      isRegisterOpen: true,
      isLoginOpen: false
    })
  }


  render(){

    return (
      <div className="root-container">

      <div className="box-contorller">

        <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginBox.bind(this)}>
          Login
        </div>

        <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")} onClick={this.showRegisterBox.bind(this)}>
          Register
        </div>
      
      </div>
      
        <div className="box-container">
        
          {this.state.isLoginOpen && <LoginBox />}
          {this.state.isRegisterOpen  && <RegisterBox />}

        
        </div>
      
      
      </div>
    )
  }
  
}

export default App;
