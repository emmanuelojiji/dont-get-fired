import "./ChoosePage.scss";
import { useState } from "react";
import MessageCard from "../Components/MessageCard";
import burna_boy_image from "../Media/burna.jpeg";
import write_new from "../Media/write-new.svg";

const ChoosePage = () => {
  return (
    <div className="ChoosePage">
      <header>
        <span className="edit">Edit</span>
        <img src={write_new} className="write-new-icon" />
      </header>
      <h1 className="messages-heading">Messages</h1>
      <MessageCard
        avatarImage={`url(${burna_boy_image})`}
        contact_name="John"
        message="This is a test message which also shows the blue unread dot."
        unread_Circle_Display="block"
      />
      <MessageCard
        contact_name="Bianca"
        message="This is a test message but it has been read."
      />
      <MessageCard contact_name="Laura" />
    </div>
  );
};

export default ChoosePage;
