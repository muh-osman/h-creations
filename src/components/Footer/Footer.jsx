// Sass
import style from "./Footer.module.scss";
// Icons
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className={style.footer_box}>
        <div className={style.email} dir="ltr">
          <a href="mailto:info@h-creations.net">
            <FaEnvelope /> info@h-creations.net
          </a>
          <a href="https://wa.me/00966987654321">
            <FaWhatsapp /> +966-987654321
          </a>
        </div>

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

        <div dir="ltr" className={style.title}>
          <h1>
            H<br />
            Creation
          </h1>
        </div>
      </div>

      <div dir="ltr">
        <p>Copyright © 2024 H Creation Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
