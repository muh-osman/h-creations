// React
import { useEffect } from "react";
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
// Image
import nada from "../../assets/images/nada.jpg";
// Icon
import CloseIcon from "@mui/icons-material/Close";
// import { Troubleshoot } from "@mui/icons-material";

export default function Footer() {
  const whatsappBtnClick = () => {
    document
      .getElementById("Window")
      .classList.toggle(`${style.hideShowWinow}`);
  };

  useEffect(() => {
    let showWhatsappWindowTimeOut = setTimeout(() => {
      document.getElementById("Window").classList.add(`${style.hideShowWinow}`);
    }, 10000);

    return () => {
      clearTimeout(showWhatsappWindowTimeOut);
    };
  }, []);

  return (
    <footer>
      <div className={style.footer_box}>
        <div className={style.email} dir="ltr">
          <a href="mailto:info@h-creations.net">
            <FaEnvelope /> info@h-creations.net
          </a>
          <a href="https://wa.me/00966508175802">
            <FaWhatsapp /> +966-508175802
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

      {/* Whatsapp icon */}

      <button onClick={whatsappBtnClick} className={style.sticky_icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          fill="#fff"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </button>

      {/* whtasappp widow */}
      <div className={style.Window} id="Window">
        <div className={style.Header_Component}>
          <div className={style.avatar_container}>
            <img
              src={nada}
              alt="ندى"
              className="Avatar__StyledAvatar-sc-9uf7h8-2 UobXQ"
            />
          </div>
          <div className="Header__Info-sc-5nh99s-1 kRqifD" dir="ltr">
            <div className={style.Header_Name}>ندى</div>
            <div
              className={style.Header_AnswerTime}
              style={{ whiteSpace: "nowrap" }}
            >
              Typically replies in minutes
            </div>
          </div>

          <div className={style.close_btn_box}>
            <button onClick={whatsappBtnClick}>
              <CloseIcon sx={{ fontSize: "18px", fontWeight: "500" }} />
            </button>
          </div>
        </div>

        <div className={style.ChatLayout}>
          <div className={style.ChatLayout_box}>
            <div className={style.ChatLayout_Author}>ندى</div>
            <div className={style.ChatLayout_Text}>
              <div>مرحبا 👋</div>
              <br />
              <div>كيف يمكنني مساعدتك؟</div>
            </div>
            <div className={style.ChatLayout_Time}>11:36</div>
          </div>
        </div>

        <a
          title="WhatsApp"
          role="button"
          href="https://wa.me/966508175802"
          className={style.ButtonBase_ButtonContainer}
          type="button"
          tabIndex={0}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4FCE5D"
              viewBox="0 0 90 90"
              width={16}
              height={16}
              style={{ padding: 1 }}
            >
              <path d="M90 43.841c0 24.213-19.779 43.841-44.182 43.841a44.256 44.256 0 0 1-21.357-5.455L0 90l7.975-23.522a43.38 43.38 0 0 1-6.34-22.637C1.635 19.628 21.416 0 45.818 0 70.223 0 90 19.628 90 43.841zM45.818 6.982c-20.484 0-37.146 16.535-37.146 36.859 0 8.065 2.629 15.534 7.076 21.61L11.107 79.14l14.275-4.537A37.122 37.122 0 0 0 45.819 80.7c20.481 0 37.146-16.533 37.146-36.857S66.301 6.982 45.818 6.982zm22.311 46.956c-.273-.447-.994-.717-2.076-1.254-1.084-.537-6.41-3.138-7.4-3.495-.993-.358-1.717-.538-2.438.537-.721 1.076-2.797 3.495-3.43 4.212-.632.719-1.263.809-2.347.271-1.082-.537-4.571-1.673-8.708-5.333-3.219-2.848-5.393-6.364-6.025-7.441-.631-1.075-.066-1.656.475-2.191.488-.482 1.084-1.255 1.625-1.882.543-.628.723-1.075 1.082-1.793.363-.717.182-1.344-.09-1.883-.27-.537-2.438-5.825-3.34-7.977-.902-2.15-1.803-1.792-2.436-1.792-.631 0-1.354-.09-2.076-.09s-1.896.269-2.889 1.344c-.992 1.076-3.789 3.676-3.789 8.963 0 5.288 3.879 10.397 4.422 11.113.541.716 7.49 11.92 18.5 16.223C58.2 65.771 58.2 64.336 60.186 64.156c1.984-.179 6.406-2.599 7.312-5.107.9-2.512.9-4.663.631-5.111z" />
            </svg>
          </div>

          <span className="ButtonBase__Ellipsis-sc-p43e7i-5 dqiKFy">
            Start Chat
          </span>
        </a>
      </div>
    </footer>
  );
}
