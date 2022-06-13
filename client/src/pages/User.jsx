import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { logout } from "../redux/userRedux";
import { publicRequest } from "../requestMethods";
import "./user.css";

const User = () => {
  let user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (username === "" || email === "") {
      setError("Please complete the form!");
    } else if (password !== confirmPass) {
      setError("Passwords do not match!");
    } else {
      user = { ...user, username, email };
      if (address) {
        user = { ...user, address };
      }
      if (password) {
        user = { ...user, password };
      }
      try {
        const res = await publicRequest.put("/users/" + user._id, user);
        console.log(res);
      } catch (error) {
        setError("Something wrong happened. Please try again!");
      }
    }
  };

  return (
    <div className="user-wrapper">
      <Header title="User" desc="User Details" />
      <div className="user-details">
        <div className="user-header">
          Hello, {user.username}
          <button onClick={handleLogout} className="user-logout">
            Logout
          </button>
        </div>
        <form
          className="user-form"
          disabled={user.username === "guest" ? true : null}
        >
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Address</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} />

          <label>New Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <button
            onClick={(e) => handleUpdate(e)}
            disabled={user.username === "Guest" ? true : null}
            style={
              user.username === "Guest"
                ? {
                    color: "gray",
                    border: "1px solid gray",
                    hover: {
                      background: "none",
                    },
                  }
                : null
            }
          >
            {user.username === "Guest" ? "Update Disabled for Guest" : "Update"}
          </button>
          {error}
        </form>
      </div>
    </div>
  );
};

export default User;
