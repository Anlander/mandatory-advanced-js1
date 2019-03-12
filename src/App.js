import React, { Component } from 'react';
import Login from './Login';
// import logo from './logo.svg';
// import './App.css';
import Create from './create';
import Chatroom from './chattrom';

import io from 'socket.io-client';

const socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
console.log(socket);

class App extends Component {
  state = {
    showlogin:true
  }
  componentDidMount(){
    socket.on('connect', function(){});
    socket.on( 'messages', (messages) => {
    this.setState({ messages: messages });
});
  }
  getmessage(newMessage){
    console.log(newMessage)
    this.setState({
      newMessage
    }, () => {
      socket.emit('message', {
        username: this.state.username,
        content: this.state.newMessage.message
      }, (res) => {
        console.log(res)
        this.setState({
          messages: [...this.state.messages, res.data.newMessage]
        })
      })
    })

  }
  gotochatroom(user){
    this.setState({
      showlogin:false,
      username:user

    })
  }
  render() {
    console.log(this.state)
    if(this.state.showlogin) {
      return <Login loginbutton={(user) => this.gotochatroom(user)} />
    } else {
      return (
        <div>
          <Create getmessage={(newMessage) => this.getmessage(newMessage)} />
          <Chatroom getmessage={this.state.messages} user={this.state.user} />
        </div>
      )
    }
  }
}//routing

export default App;
