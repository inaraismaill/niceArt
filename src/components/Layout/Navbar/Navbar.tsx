import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../../../assets/logo/logo.png";
import styles from "./navbar.module.css";

import { FiMenu, FiX } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
// import miniLogo from "../../../assets/logo/miniLogo.png"

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const menuItems = [
    { to: "/", label: "Ana Səhifə" },
    { to: "/about", label: "Haqqımızda" },
    { to: "/products", label: "Məhsullar" },
    { to: "/partners", label: "Partnyorlar" },
    { to: "/contact", label: "Əlaqə" },
  ];

  return (
    <div style={{ height: "130px" }}>
      <nav className={styles.nav}>
        <header className={styles.header}>
          <div className={styles.img}>
            <img src="assets/logo/logo.png" alt="" />
          </div>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            {isMobileMenuOpen ? <FiX/> : <FiMenu/>}
          </div>
         <ul className={`${styles.ui} ${isMobileMenuOpen ? styles.open : styles.closed}`}>
            {menuItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <img
                          className={styles.miniLogo}
                          src="assets/logo/miniLogo.png"
                          alt="Mini Logo"
                        />
                      )}
                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
