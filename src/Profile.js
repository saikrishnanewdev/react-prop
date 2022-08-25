const Profile = ({ title, thumbnailUrl, url }) => {
  return (
    <div className="profile-card">
      <img src={thumbnailUrl} alt="some thing" />
      <h2 className="title">{title}</h2>
      <a href={url} className="button">
        details
      </a>
    </div>
  );
};
export default Profile;
