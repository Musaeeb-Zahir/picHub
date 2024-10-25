import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "../Styles/Auth.css";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/slices/registerFormSlice";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useRef();
  const userEmail = useRef();
  const userPassword = useRef();
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(
      setUser({
        username: username.current.value,
        userEmail: userEmail.current.value,
        userPassword: userPassword.current.value,
      })
    );
    username.current.value = " ";
    userEmail.current.value = " ";
    userPassword.current.value = " ";
  };

  return (
    <>
      <h2 className="text-center mt-5">Register</h2>
      <div className="container mt-5 loginContainer">
        <div className="LoginLogo">
          <img src="logo.png" alt="" className="logo-image" />
        </div>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={(e) => handlesubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    required
                    ref={username}
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Choose a username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    ref={userEmail}
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    ref={userPassword}
                    type="password"
                    className="form-control"
                    autoComplete="true"
                    id="password"
                    placeholder="Create a password"
                  />
                </div>
                <button type="submit" className="btn btn-secondary w-100">
                  Register
                </button>
                <span>
                  Already have acount
                  <button
                    type="submit"
                    className="border-0  bg-white text-primary my-2 mx-2 "
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
