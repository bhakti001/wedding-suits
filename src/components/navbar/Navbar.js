import React, { useState } from "react";
import "./navbar.css";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      {" "}
      <div className="">
        <div className={click ? "nav_sho" : "color"}>
          <div className="logo align-middle ">
         <p className="font-normal text-4xl p-5 align-middle text-white ">
           <Link to='/'>   P E T E R <br /> <span>P O S H</span> </Link>
            </p>
            <div
              className="menu flex align-top justify-end pr-20 text-xl"
              onClick={handleClick}
            >
              {click ? (
                <LiaTimesSolid className="mt-[-68px] text-4xl   " />
              ) : (
                <FiMenu className="mt-[-70px] text-4xl  text-white" />
              )}
            </div>
          </div>
          <ul className={click ? "nav_show" : "nav_hide"}>
            <div className="fitem">
              <div className="item">
                <li className="nav-item">
                  <NavLink
                    to="/collection/"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Collections
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/showroom/"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Showroom
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/ourstory/"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Our Story
                  </NavLink>
                </li>
              </div>
              <div className="hre">
                <ul className="scitem">
                  <li className="nav_link">
                    <NavLink className="nav_link" onClick={closeMobileMenu}>
                      USEFUL LINKS{" "}
                    </NavLink>
                  </li>
                  <li className="nav-link">
                    <Link to='/PersonalTailoring/' onClick={closeMobileMenu}>
                      
                      Personal Tailorin
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to='/BoysSuits/' onClick={closeMobileMenu}>Boys Suits</Link>
                  </li>
                  <li className="nav-link">
                    <Link to='/Waistcoats/' onClick={closeMobileMenu}>Waistcoats </Link>
                  </li>{" "}
                  <li className="nav-link">
                    <Link to='/Accessories/' onClick={closeMobileMenu}>Accessories </Link>
                  </li>
                  <li className="nav-link">
                    <Link to='/weddingfayres/' onClick={closeMobileMenu}>Wedding Fayres</Link>
                  </li>
                  <li className="nav-link">
                    <Link to="/contactus/"  onClick={closeMobileMenu}>Contact Us</Link>
                  </li>
                </ul>
              </div>{" "}
            </div>
          </ul>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
