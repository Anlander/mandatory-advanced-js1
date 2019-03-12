import React, { Component } from 'react';

class Login extends Component {
  login(e){

    this.props.loginbutton(this.refs.username.value)
  }
  render(){
    return(
      <div className="login-div">
      <input className="login-input" type='text' ref="username" placeholder="Username"/>
      <button className="btn-L" onClick={(e) => this.login(e)}>Login</button>
      </div>
    )
  }
}

export default Login;
