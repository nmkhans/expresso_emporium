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
        <div className="flex">
          <div className="flex items-center justify-end basis-[60%]">
            <Link className="flex items-center gap-x-2" to="/">
              <img
                className="w-14"
                src={HeaderLogo}
                alt="Header Logo"
              />
              <h3 className="text-white text-3xl">
                Espresso Emporium
              </h3>
            </Link>
          </div>
          <div className="basis-[40%] flex items-center justify-end gap-x-5">
            <Link
              to="/login"
              className="btn btn-primary btn-outline hover:text-accent"
            >
              Login
            </Link>{" "}
            <Link
              to="/register"
              className="btn btn-primary btn-outline hover:text-accent"
            >
              register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
