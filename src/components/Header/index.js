import React from "react";
import "./styles.scss";
import { Link, useLocation } from "react-router-dom";
const Header = ({ routers }) => {
  const location = useLocation();
  return (
    <div className="header">
      {routers.map(({ path, label, key }) => (
        <Link
          to={path}
          key={key}
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
