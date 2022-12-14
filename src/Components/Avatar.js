import "./Avatar.scss";

const Avatar = ({ avatarImage }) => {
  return (
    <div className="Avatar" style={{ backgroundImage: avatarImage }}></div>
  );
};

export default Avatar;
