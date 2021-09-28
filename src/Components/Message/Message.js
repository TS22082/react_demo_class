import React from "react";
import "./Message.css";

const Message = ({ color, name }) => {
  return (
    <div>
      <h1 className={color}>hello {name}</h1>
    </div>
  );
};

export default Message;
