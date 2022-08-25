import React, { useState } from "react";
import Profile from "./Profile";
import Data from "./Data";
import commentdata from "./commentdata";
import Comments from "./Comments";

const App = () => {
  const [active, setActive] = useState("");
  return (
    <body>
      <navbar className="nav">
        <button onClick={() => setActive("profile")}>profile</button>
        <button onClick={() => setActive("comment")}>Comments</button>
        <button onClick={() => setActive("")}>Hide</button>
      </navbar>
      <section className="post-container">
        {active === "profile" &&
          Data.map((eachObj) => {
            const { id, title, thumbnailUrl, url } = eachObj;
            return (
              <Profile
                key={id}
                id={id}
                title={title}
                thumbnailUrl={thumbnailUrl}
                url={url}
              />
            );
          })}
      </section>
      <section className="container">
        {active === "comment" &&
          commentdata.map((eachElement) => {
            const { id, name, email, body } = eachElement;
            return <Comments id={id} name={name} email={email} body={body} />;
          })}
      </section>
    </body>
  );
};

export default App;
