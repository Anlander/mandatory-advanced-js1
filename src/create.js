import React, { Component } from 'react';

class Create extends Component {
  state = {
    message: ''
  }
  onchange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onclick(){
    console.log('click');
    this.props.getmessage(this.state)

  }
  render () {
    return (

    <div className="big-div">
        <p className="header">CHATROOM</p>
        <input  className="input-send" onChange={(e) => this.onchange(e)} placeholder="Message" type="text" name="message"/>
        <button className="btn-send" onClick={() => this.onclick()}>Send</button>
    </div>
    );
  }
}


export default Create;
