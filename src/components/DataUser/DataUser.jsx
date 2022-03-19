import React from "react";
import Date from "../Date/Date";
import Avatar from "../Avatar/Avatar";
import UserName from "../UserName/UserName";
import AvatarImage from "../../assets/img/user-02.webp";

function DataUser(props) {
  return (
    <section>
      <div>
        <Avatar src={AvatarImage} />
      </div>
      <div>
        <UserName userName="fulanito de tal" />
        <Date date="20-marzo" />
      </div>
    </section>
  );
}

export default DataUser;
