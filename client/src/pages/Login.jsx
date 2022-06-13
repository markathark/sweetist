import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { loginReset } from "../redux/userRedux";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  useEffect(() => {
    dispatch(loginReset());
  }, []);

  const handleGuestLogin = (e) => {
    login(dispatch, { username: "Guest", password: "123456" });
  };

  return (
    <div className="login">
      <span className="login-title">Sign In</span>
      <span className="login-desc">Enter your e-mail and password:</span>
      <form className="login-form">
        <label>Username</label>
        <input
          placeholder="username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <span className="login-error"> Wrong Credentials, Try again!</span>
        )}
        <button onClick={handleClick} disabled={isFetching}>
          log in
        </button>
      </form>
      <span className="login-link" onClick={handleGuestLogin}>
        <b>Click Here to Log In as Guest (For Testing)</b>
      </span>
      <Link to="/register" className="login-link">
        Don't have an account? Register here.
      </Link>
    </div>
  );
};

export default Login;
