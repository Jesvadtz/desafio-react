import React from "react";
import "./UserName.scss";

function UserName(props) {
  const { userName } = props;
  return <p className="userName">{userName}</p>;
}

export default UserName;
