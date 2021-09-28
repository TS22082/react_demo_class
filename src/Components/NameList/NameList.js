import React from "react";
import Message from "./../Message/Message";

const NameList = () => {
  const names = [{ fname: "Zeinu" }, { fname: "Jernice" }, { fname: "Yiley" }];
  return (
    <div>
      {names.map((name, index) => (
        <Message key={index} name={name.fname} />
      ))}
    </div>
  );
};

export default NameList;
