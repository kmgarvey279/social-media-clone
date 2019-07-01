import React from "react";
import UserName from "./UserName";
import UserImage from "./UserImage";
import UserOptions from "./UserOptions";

function UserInfo(){
  return (
    <UserName
      name="Kevin Garvey"/>
    <UserImage
      image='<img src="./user-default.png"'/>
    <UserOptions
      tweets="TWEETS"
      following="FOLLOWING"
      followers="FOLLOWERS"/>
  );
}

export default UserInfo;
