import React from "react";
import { Link } from "react-router";
import HeaderLogo from "../../assets/logo.png";
import BackgroundImg from "../../assets/more/15.jpg";

const Header = () => {
  return (
    <header
      style={{ backgroundImage: `url(${BackgroundImg})` }}
      className="bg-no-repeat bg-center bg-cover py-2"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Link className="flex items-center gap-x-2" to="/">
            <img
              className="w-14"
              src={HeaderLogo}
              alt="Header Logo"
            />
            <h3 className="text-white text-3xl">Espresso Emporium</h3>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
