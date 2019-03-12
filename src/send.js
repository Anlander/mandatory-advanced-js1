import React, { Component } from 'react';

class Constru extends Component {
  render() {
    let message = this.props.getmessage.map((ar, index) => {
      return (
        <div key={index.toString()}>
        <p className="user-chat">Username:{ar.username}</p>
        <p>Message: {ar.content}</p>
        </div>
      )
    })
    return (
      <div>
      {message}
      </div>
    );
  }
}


export default Constru;
