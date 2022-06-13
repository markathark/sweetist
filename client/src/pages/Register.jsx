import React, { useState } from "react";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import "./register.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPass === ""
    ) {
      setError("Please complete the form!");
    } else if (password !== confirmPass) {
      setError("Passwords do not match!");
    } else {
      try {
        const user = { username, email, password };
        const res = await publicRequest.post("/auth/register", user);
        console.log(res);
        setSuccess(true);
      } catch (error) {
        setError("Something wrong happened. Please try again!");
        console.log(error);
      }
    }
  };

  return (
    <div className="register">
      {success ? (
        <span>
          Thank you for registering!{" "}
          <Link to="/login"> Please login here.</Link>
        </span>
      ) : (
        <>
          <span className="register-title">Register</span>
          <span className="register-desc">
            Please fill the information below:
          </span>
          <form className="register-form">
            <label for="username">Username</label>
            <input
              id="username"
              placeholder="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="email">Email</label>
            <input
              id="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="pword">Password</label>
            <input
              id="pword"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="confirm">Password</label>
            <input
              id="confirm"
              type="password"
              placeholder="confirm password"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            {error && <span className="register-error">{error}</span>}
            <button onClick={handleRegister}>register</button>
            <span className="register-agreement">
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
