import React, { Component } from 'react';
import Create from './create';
import Emoji from 'react-emoji-render';
import Linkify from 'react-linkify';






class Chatroom extends Component {



  render() {
    let message = this.props.getmessage.map((ar, index) => {
      return (
        <div className="chatroom" key={index.toString()}>
        <p className="user-chat">{ar.username}</p>
        <p className="message-chat">
          <Linkify>
           <Emoji text={ar.content} />
          </Linkify>
        </p>
        </div>

      )
    })



    return (
      <div>
      <div className="bigroom">
        <Linkify properties={{target: '_blank', style: {color: 'red', fontWeight: 'bold', fontstyle: 'normal'}}}>
         {message}
        </Linkify>
      </div>
      <button className="signout" onClick={this.props.logout}>Logout</button>
      </div>

    );
  }
}//routing

export default Chatroom;
