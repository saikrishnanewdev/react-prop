import React from "react";

const Comments = ({ id, name, email, body }) => {
  return (
    <div className="comment-cad">
      <div className="card-details">
        <h2 className="email">{email}</h2>
        <h2 className="name">{name}</h2>
      </div>
      <p>{body}</p>
    </div>
  );
};

export default Comments;
