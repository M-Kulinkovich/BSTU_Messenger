import React, { Component } from "react";
import "./message-block.css";
export default class MessagesBlock extends Component {
  render() {
    return (
      <div className="messages-block">
        <ul>
          <li>message one</li>
          <li>message two</li>
          <li>message three</li>
          <li>message four</li>
          <li>message five</li>
        </ul>
      </div>
    );
  }
}
