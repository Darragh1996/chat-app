import React from "react";

import Message from "../Message/Message.js";
import ScrollToBottom from "react-scroll-to-bottom";

import "./Messages.css";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom>
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        );
      })}
    </ScrollToBottom>
  );
};

export default Messages;
