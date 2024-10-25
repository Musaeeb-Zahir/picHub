import React from "react";
import Collection from "../Components/Collection";
import { useSelector } from "react-redux";

function Profile() {
  const loginState = useSelector((state) => state.loginFormState);
  const userIsLogin = loginState.length > 0;
  const loggedInUserName =
    userIsLogin && loginState.length > 0 && loginState[0].email
      ? loginState[0].email.split("@")[0]
      : "";
  return (
    <>
      <div className="profile-container">
        <div>
          <img
            src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="pp"
          />
          <div>
            <h2>@{loggedInUserName}</h2>
            <p>
              Download free, beautiful high-quality photos curated by Musaeeb.
            </p>
          </div>
        </div>
      </div>
      <Collection />
    </>
  );
}

export default Profile;
