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
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
  }

  login (e){
    let { name } = this.state;
    if( name.length < 12 && name.length > 0){
      this.props.loginbutton(this.refs.username.value)

    }
  }

  handleChangeUserName(e){
    if(e.target.value.match("^[a-zA-Z ]*$")) {
      this.setState({name: e.target.value});
    }
  }



  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();

    });
  };


  validateName = (e) => {
    let { name } = this.state;
    let { pattern } = /"^[a-zA-Z ]*$"/
    this.setState({
      nameError:
        name.length < 12 ? null: 'Max 12 characters',
      error:
        name.length > 0 ? null: 'Atleast 1 character',


    });
  }








  render() {
    return (
      <form>
        <div className='login-div'>
          <input
              className="login-input"
              type='text'
              ref="username"
              placeholder="Username"
              value={this.state.name}
              onChange={
                this.validateName,
                this.handleNameChange,
                this.handleChangeUserName


              }

          />
            <div className='error-len'>{this.state.nameError}</div>
            <div className='error-len'>{this.state.error}</div>
            <div className='error-len'>{this.state.sign}</div>
            <button

              className="btn-L"
              onClick={(e) => this.login(e)}>Login
            </button>

        </div>

      </form>
    );
  }
}

export default Login
