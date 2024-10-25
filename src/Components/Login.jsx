import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/Auth.css";
import appStore from "../redux/store";
import { Navigate, useNavigate } from "react-router-dom";
import { setLoginUser } from "../redux/slices/loginFormSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [userNotFounderr, setuserNotFounderr] = useState("");
  const navigate = useNavigate();
  const RegisteredStore = useSelector((state) => state.registerFormState);
  const email = useRef();
  const password = useRef();

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    const userFound = RegisteredStore.find(
      (items) =>
        items.userEmail === email.current.value &&
        items.userPassword === password.current.value
    );
    if (userFound) {
      dispatch(
        setLoginUser({
          email: email.current.value,
          password: password.current.value,
        })
      );
    } else {
      setuserNotFounderr("!Not found may be your email or password incorrect");
      setTimeout(() => {
        setuserNotFounderr("");
      }, 2000);
    }
  }

  return (
    <>
      <h2 className="text-center mt-5">Login</h2>
      <div className="container loginContainer align-items-center mt-5">
        <div className="LoginLogo mt-2">
          <img src="logo.png" alt="" className="logo-image" />
        </div>
        <div className=" login-form w-100">
          <div className="col-md-6 mt-[50px]">
            <form onSubmit={(e) => handleOnSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  autoComplete="true"
                  ref={email}
                  type="email"
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
                  autoComplete="true"
                  ref={password}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
            <span>
              Do not have acount
              <button
                className="border-0 bg-white text-primary my-2 mx-2 "
                onClick={() => navigate("/registration")}
              >
                Register
              </button>
            </span>
            <br />
          </div>
        </div>
      </div>
      <center className="text-danger text-center ">{userNotFounderr}</center>
    </>
  );
};

export default Login;
