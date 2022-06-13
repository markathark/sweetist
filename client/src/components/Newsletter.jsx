import { useState } from "react";
import "./newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [newsMsg, setNewsMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setNewsMsg("Thank you for subscribing!");
    }
  };

  return (
    <div className="news-wrapper">
      <div className="news-info">
        <span className="news-title">Newsletter</span>
        <span className="news-desc">
          Receive sweetist updates and news in your inbox! Everything from art
          tips and tricks, to wonderful recipes to bringing joyness in your
          life.
        </span>
      </div>
      <div className="news-signup">
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <button onClick={handleSubmit}>Sign Up!</button>
      </div>
      {newsMsg && <div>{newsMsg}</div>}
    </div>
  );
};

export default Newsletter;
