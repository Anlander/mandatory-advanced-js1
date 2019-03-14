import React, { Component } from 'react';


class Login extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      error: '',
      signs: true,
      signserror: ''
    };
    this.validationsigns = this.validationsigns.bind(this);
  }

  // login (e){
  //   let { name } = this.state;
  //   if( name.length < 12 && name.length > 0){
  //     this.props.loginbutton(this.refs.username.value)
  //
  //   }
  // }

  validationsigns = (e) => {
    let regex = /^[a-zA-Z0-9\s-_]+$/;
    if(regex.test(this.state.name)){
      this.setState({sings:false})
      this.props.loginbutton(this.refs.username.value)
    }else {
      this.setState({
        signserror: 'Username should only contain letters or numbers'
      });
    }

  }



  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();

    });
  };


  validateName = () => {
    let { name } = this.state;
    if (name.length.name > 12){
      this.setState({signs:false})
    } else {
      this.setState({
        nameError:
          name.length < 12 ? null: 'Max 12 characters',
        error:
          name.length > 0 ? null: 'Atleast 1 character',
      });
    }
  }








  render() {
    return (
      <div className='login-div'>
          <input
              className="login-input"
              type='text'
              ref="username"
              placeholder="Username"
              value={this.state.name}
              onChange={this.validateName, this.handleNameChange}
          />
            <div className='error-len'>{this.state.nameError}</div>
            <div className='error-len'>{this.state.error}</div>
            <button
              className="btn-L"
              onClick={this.validationsigns}>Login
            </button>
            <div className='error-signs'>{this.state.signserror}</div>

        </div>


    );
  }
}

export default Login
