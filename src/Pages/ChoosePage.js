import "./ChoosePage.scss";
import { useState } from "react";
import MessageCard from "../Components/MessageCard";

const ChoosePage = () => {
  const [introVisible, setIntroVisible] = useState(false);

  return (
    <div className="ChoosePage">
      <header>
        <span>Edit</span>
        <span>Write Icon</span>
      </header>
      <h1 className="messages-heading">Messages</h1>
      <MessageCard/>
      <MessageCard/>
      <MessageCard/>
    </div>
  );
};

export default ChoosePage;
