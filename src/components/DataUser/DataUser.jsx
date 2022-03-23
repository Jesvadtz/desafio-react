import React from "react";
import DatePost from "../DatePost/DatePost";
import Avatar from "../Avatar/Avatar";
import UserName from "../UserName/UserName";

function DataUser(props) {
  return (
    <section className="d-flex">
      <div>
        <Avatar src="/assets/img/user-01.webp" />
      </div>
      <div>
        <UserName userName="NameUser" />
        <DatePost date="Marzo 21" />
      </div>
    </section>
  );
}

export default DataUser;
