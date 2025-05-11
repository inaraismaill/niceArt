import React, { FC } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../../../assets/logo/logo.png";
import styles from "./navbar.module.css";
import { IoHomeOutline } from "react-icons/io5";
// import miniLogo from "../../../assets/logo/miniLogo.png"

const Navbar: FC = () => {
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
          <ul className={styles.ul}>
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
