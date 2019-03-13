import React, { Component } from 'react';


function handleChangeUserName(e){
  if(e.match("^[a-zA-Z ]*$")!== null) {
    return e;
  }
}

class Login extends Component {
  login(e){
    this.props.loginbutton(this.refs.username.value)
  }


constructor(){
  super();
  this.state={text:''};
  this.onChange = this.onChange.bind(this);

}

onChange(e){
  if(e.target.value.match("^[a-zA-Z ]*$")) {
    this.setState({text: e.target.value});
  }
}

// handleChangeUserName(e){
  // if(e.target.value.match("^[a-zA-Z ]*$")) {
  //   this.setState({text: e.target.value});
//
//   }
// }


  render(){

    let error = handleChangeUserName(this.state.text);

    return(
      <div className="login-div">
      <input
      className="login-input"
      type='text'
      ref="username"
      placeholder="Username"
      value={this.state.text}
      onChange={this.onChange}
      />
      <button
      className="btn-L"
      onClick={(e) => this.login(e)}>Login
      </button>
      <div style= {{color: 'white'}}>
        {error}
      </div>
      </div>

    )
  }
}

export default Login
