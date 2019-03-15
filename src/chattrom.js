import React, { Component } from 'react';
import Create from './create';
import Emoji from 'react-emojione';
import Linkify from 'react-linkify';






class Chatroom extends Component {



  render() {
    let message = this.props.getmessage.map((ar, index) => {
      return (
        <div className="chatroom" key={index.toString()}>
        <p className="user-chat">{ar.username}</p>
        <p className="message-chat"> {ar.content}

        </p>
        </div>

      )
    })



    return (
      <div>
      <div className="bigroom">
        <Linkify properties={{target: '_blank', style: {color: 'red', fontWeight: 'bold', fontstyle: 'normal'}}}>
        <Emoji>{message}</Emoji>
        </Linkify>
      </div>
      <button className="signout" onClick={this.props.logout}>Logout</button>
      </div>

    );
  }
}//routing

export default Chatroom;
