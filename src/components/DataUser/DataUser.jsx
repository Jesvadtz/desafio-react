import React from "react";
import DatePost from "../DatePost/DatePost";
import Avatar from "../Avatar/Avatar";
import UserName from "../UserName/UserName";

function DataUser(props) {
  const { userName, date } = props;
  return (
    <section className="d-flex">
      <div>
        <Avatar src="/assets/img/user-01.webp" />
      </div>
      <div>
        <UserName userName={userName} />
        <DatePost date={date} />
      </div>
    </section>
  );
}

export default DataUser;
