import React, { Component } from 'react';



class Login extends Component {


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      error: '',
      sign: '',
    };
  }

  login (e){
    let { name } = this.state;
    if( name.length < 12 == name.length > 0){
      this.props.loginbutton(this.refs.username.value)

    }
  }


  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();

    });
  };


  validateName = () => {
    let { name } = this.state;
    this.setState({
      nameError:
        name.length < 12 ? null: 'Max 12 characters',
      error:
        name.length > 0 ? null: 'Atleast 1 character',

    });
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='login-div'>
          <input
              className="login-input"
              type='text'
              ref="username"
              placeholder="Username"
              value={this.state.name}
              onChange={this.handleNameChange}
              onBlur={this.validateName}
          />
            <div className='error-len'>{this.state.nameError}</div>
            <div className='error-len'>{this.state.error}</div>
            <button   className="btn-L"
              onClick={(e) => this.login(e)}>Login
            </button>

        </div>

      </form>
    );
  }
}

export default Login
