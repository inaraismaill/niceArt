import React, { FC } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";
import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.information}>
          <div className={styles.left}>
            <img src="./assets/logo/logo.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank" rel="*">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="*">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="*">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="*">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="*">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div>
              <h4>Site</h4>
              <ul>
                <li>
                  <NavLink to="/">Home Page</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/partners">Partners</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <span>
                    <CiMail />
                  </span>
                  contact@company.com
                </li>
                <li>
                  <span>
                    <CiPhone />
                  </span>
                  (414) 687 - 5892
                </li>
                <li>
                  <span>
                    <CiLocationOn />
                  </span>
                  Location of company
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <p>Copyright Ⓒ 2022 Javidan Nasib</p>
          <p>
            All Rights Reserved | <span>Terms and Conditions</span> |{" "}
            <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
