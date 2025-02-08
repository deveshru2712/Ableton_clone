import React from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-16 border border-b-2 flex items-center px-10 py-8 gap-8 text-xl">
        <div className="">
          <a href="#">
            <img src={logo} alt="logo_image" className="size-16" />
          </a>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex items-center justify-between ">
            <div>
              <ul className="flex items-center gap-8 font-medium">
                <li>
                  <a href="#">Live</a>
                </li>
                <li>
                  <a href="#">Push</a>
                </li>
                <li>
                  <a href="#">Move</a>
                </li>
                <li>
                  <a href="#">Note</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Packs</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#" className="text-orange">
                    More+
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6 font-medium">
            <span className="text-darkBlue cursor-pointer">
              Try Live 12 for free
            </span>
            <span className=" cursor-pointer">Login or register</span>
          </div>
        </div>
      </nav>
      <div className="w-full h-10 flex items-centers px-12 my-4">
        <ul className="font-medium  flex items-center gap-8">
          <li>
            <a href="#" className="text-orange">
              About
            </a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Apprenticeships</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
