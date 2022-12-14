import Avatar from "./Avatar";
import "./MessageCard.scss";

const MessageCard = ({avatarImage}) => {
  return (
    <div className="message-card">
      <div className="message-card-left">
        <Avatar avatarImage={avatarImage} />
        <div className="name-message">
          <span className="contact-name">Burna Boy</span>
          <span className="message-preview">
            Yo, This is a test message haha
          </span>
        </div>
      </div>

      <div className="message-card-right">
        <span>17:40</span>
      </div>
    </div>
  );
};

export default MessageCard;
