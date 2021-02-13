import React from "react";
import Link from "./Link";
import "../Routing/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <div className="ui container">
          <div className="navbar">
            <Link href="/" className="linkToPage">
              Home
            </Link>
            <Link href="/overtime" className="linkToPage">
              Overtime
            </Link>

            <Link href="/personnel" className="linkToPage">
              Personnel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
