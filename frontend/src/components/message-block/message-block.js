import React, { Component } from "react";
import "./message-block.css";
import MessageItem from "./message-item/message-item";
import { connect } from "react-redux";
import * as selectActions from "../../store/actions/message-actions";

class MessagesBlock extends Component {
  render() {

    return (
      <div className="messages-block">
        <ul>
        <MessageItem/>
        </ul>
        <input type='text' className="send-message" placeholder = 'message'/>
        <button className='send-btn'>send</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { message } = state.messages;
  return {
    message
  };
};
export default connect(mapStateToProps, selectActions)(MessagesBlock);

