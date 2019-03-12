import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Create from './create';
// import Constru from './send';
//
// import io from 'socket.io-client';
//
// const socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
// console.log(socket);

class Chatroom extends Component {
  render() {
    let message = this.props.getmessage.map((ar, index) => {
      return (
        <div className="chatroom" key={index.toString()}>
        <p className="user-chat">{ar.username}</p>
        <p className="message-chat">{ar.content}</p>
        </div>
      )
    })
    return (
      <div className="bigroom">
      {message}
      </div>
    );
  }
}//routing

export default Chatroom;
