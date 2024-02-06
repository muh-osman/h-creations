// React
import { useRef } from "react";
// Sass
import style from "./Header.module.scss";
// React router
import { Link, NavLink } from "react-router-dom";
// Icons
import {
  FaHouse,
  FaHeadphones,
  FaInfo,
  FaBullhorn,
  FaHashtag,
  FaCode,
  FaFontAwesome,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
// Logo
import logo from "../../assets/images/logo.webp";




export default function Header() {
  const closeBtn = useRef();

  const closeSideBar = () => {
    closeBtn.current.click();
  };

  return (
    <nav className="navbar bg-light navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container nav-box flex-row-reverse">
        <Link className="navbar-brand p-0" to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          style={{ width: "fit-content" }}
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header margin-auto justify-content-center">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img className="reverse-logo logo p-3" src={logo} alt="logo" />
            </h5>
            <button
              ref={closeBtn}
              type="button"
              className="btn-close d-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 px-0 mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <NavLink
                  className="nav-link anchor"
                  to="/"
                  onClick={closeSideBar}
                >
                  <FaHouse className="uniform-icon" />
                  الرئيسية
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link anchor"
                  to="marketing"
                  onClick={closeSideBar}
                >
                  <FaBullhorn className="uniform-icon" />
                  التسويق
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link anchor"
                  to="programing"
                  onClick={closeSideBar}
                >
                  <FaCode className="uniform-icon" />
                  برمجة المواقع
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link anchor"
                  to="branding"
                  onClick={closeSideBar}
                >
                  <FaFontAwesome className="uniform-icon" />
                  الهويات البصرية
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link anchor"
                  to="socialmedia"
                  onClick={closeSideBar}
                >
                  <FaHashtag className="uniform-icon" />
                  إدارة السوشيال ميديا
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link anchor"
                  to="about"
                  onClick={closeSideBar}
                >
                  <FaInfo className="uniform-icon" /> من نحن
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link anchor"
                  to="contact"
                  onClick={closeSideBar}
                >
                  <FaHeadphones className="uniform-icon" /> تواصل معنا
                </NavLink>
              </li>
            </ul>

            <div className={style.social_media_icon_box}>
              <div className={style.social_media_icon}>
                <a href="https://twitter.com">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com">
                  <FaXTwitter />
                </a>
              </div>
        </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
