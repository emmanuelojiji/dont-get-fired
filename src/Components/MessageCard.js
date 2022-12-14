import Avatar from "./Avatar";
import "./MessageCard.scss";

const MessageCard = ({
  avatarImage,
  contact_name,
  message,
  unread_Circle_Display,
}) => {
  return (
    <div className="message-card">
      <div
        className="unread-circle"
        style={{ display: unread_Circle_Display }}
      ></div>
      <div className="message-card-left">
        <Avatar avatarImage={avatarImage} />
        <div className="name-message">
          <span className="contact-name">{contact_name}</span>
          <span className="message-preview">{message}</span>
        </div>
      </div>

      <div className="message-card-right">
        <span className="time">17:40</span>
      </div>
    </div>
  );
};

export default MessageCard;
