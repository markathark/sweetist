import { useEffect, useState } from "react";
import "./header.css";

const Header = (props) => {
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (props.desc) {
      setDesc(props.desc);
    } else if (props.title === "sweets") {
      setDesc("Shop all sweet products!");
    } else if (props.title === "art") {
      setDesc("Shop all art products!");
    } else {
      setDesc("Shop all products today!");
    }
  }, [props.desc, props.title]);

  return (
    <div className="header-wrapper">
      <span className="header-title">
        {props.title ? props.title : "Products"}
      </span>
      <span className="header-desc">{desc}</span>
    </div>
  );
};

export default Header;
