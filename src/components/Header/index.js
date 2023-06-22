import React from "react";
import "./styles.scss";
import { Link, useLocation } from "react-router-dom";
const Header = ({ routers }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="header">
      {routers.map(({ path, label }) => (
        <Link
          to={path}
          className={
            location.pathname === path ? "eachHead active" : "eachHead"
          }
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Header;
