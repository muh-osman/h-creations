// React
import { useEffect, useState } from "react";
// Sass
import style from "./Brandin.module.scss";
// Icon
import CloseIcon from "@mui/icons-material/Close";
// images
import logoA from "../../assets/images/branding/logo-1.png";
import logoB from "../../assets/images/branding/logo-2.png";
import logoC from "../../assets/images/branding/logo-3.png";
import logoD from "../../assets/images/branding/logo-4.png";
import logoE from "../../assets/images/branding/logo-5.png";
import logoF from "../../assets/images/branding/logo-6.png";
import logoG from "../../assets/images/branding/logo-7.png";
import logoH from "../../assets/images/branding/logo-8.png";

import brandA from "../../assets/images/branding/brand-1.jpg";
import brandB from "../../assets/images/branding/brand-2.jpg";
import brandC from "../../assets/images/branding/brand-3.jpg";
import brandD from "../../assets/images/branding/brand-4.jpg";
import brandE from "../../assets/images/branding/brand-5.jpg";
import brandF from "../../assets/images/branding/brand-6.jpg";

import rowA from "../../assets/images/branding/row-1.avif";
import rowB from "../../assets/images/branding/row-2.avif";
import rowC from "../../assets/images/branding/row-3.avif";
import rowD from "../../assets/images/branding/row-4.avif";
import rowE from "../../assets/images/branding/row-5.avif";
import rowF from "../../assets/images/branding/row-6.avif";
import rowG from "../../assets/images/branding/row-7.avif";
import rowH from "../../assets/images/branding/row-8.avif";
import rowI from "../../assets/images/branding/row-9.avif";
import rowJ from "../../assets/images/branding/row-10.avif";
import rowK from "../../assets/images/branding/row-11.avif";
import rowL from "../../assets/images/branding/row-12.avif";
import rowM from "../../assets/images/branding/row-13.avif";
import rowN from "../../assets/images/branding/row-14.avif";
import rowO from "../../assets/images/branding/row-15.avif";
import rowP from "../../assets/images/branding/row-16.avif";
import rowQ from "../../assets/images/branding/row-17.avif";
import rowR from "../../assets/images/branding/row-18.avif";
import rowS from "../../assets/images/branding/row-19.avif";
import rowT from "../../assets/images/branding/row-20.avif";
import rowU from "../../assets/images/branding/row-21.avif";
import rowV from "../../assets/images/branding/row-22.avif";
import rowW from "../../assets/images/branding/row-23.avif";
import rowX from "../../assets/images/branding/row-24.avif";

export default function Branding() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const [overlayImage, setOverlayImage] = useState("");

  const handleImageClick = (src) => {
    setOverlayImage(src);
    document
      .getElementById("lighthouseOverlay")
      .classList.add(`${style.overlay_show}`);
  };

  const handleCloseOverlay = (e) => {
    if (e.target === e.currentTarget) {
      document
        .getElementById("lighthouseOverlay")
        .classList.remove(`${style.overlay_show}`);
      setTimeout(() => {
        setOverlayImage("");
      }, 300);
    }
  };

  const closeBtn = () => {
    document
      .getElementById("lighthouseOverlay")
      .classList.remove(`${style.overlay_show}`);
    setTimeout(() => {
      setOverlayImage("");
    }, 300);
  };

  return (
    <div className={style.container}>
      <section className={style.A} dir="ltr">
        <h1>
          BRAND
          <br />
          DESIGN
        </h1>
      </section>

      <section className={style.D}>
        <h1>تصميم شعارات</h1>
        <div className={style.img_box_D}>
          <div>
            <img src={logoA} alt="programing" />
          </div>
          <div>
            <img src={logoB} alt="programing" />
          </div>
          <div>
            <img src={logoC} alt="programing" />
          </div>
          <div>
            <img src={logoD} alt="programing" />
          </div>
          <div>
            <img src={logoE} alt="programing" />
          </div>
          <div>
            <img src={logoF} alt="programing" />
          </div>
          <div>
            <img src={logoG} alt="programing" />
          </div>
          <div>
            <img src={logoH} alt="programing" />
          </div>
        </div>
      </section>

      <section className={style.carousel}>
        <h1>الهويات البصرية</h1>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2500">
              <img src={brandA} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={brandB} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={brandC} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={brandD} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={brandE} className="d-block w-100" alt="branding" />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <img src={brandF} className="d-block w-100" alt="branding" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className={style.rows}>
        <div>
          <div onClick={() => handleImageClick(rowI)}>
            <img src={rowI} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowJ)}>
            <img src={rowJ} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowK)}>
            <img src={rowK} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowL)}>
            <img src={rowL} alt="branding" />
          </div>
        </div>

        <div>
          <div onClick={() => handleImageClick(rowA)}>
            <img src={rowA} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowB)}>
            <img src={rowB} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowC)}>
            <img src={rowC} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowD)}>
            <img src={rowD} alt="branding" />
          </div>
        </div>

        <div>
          <div onClick={() => handleImageClick(rowM)}>
            <img src={rowM} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowN)}>
            <img src={rowN} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowO)}>
            <img src={rowO} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowP)}>
            <img src={rowP} alt="branding" />
          </div>
        </div>

        <div>
          <div onClick={() => handleImageClick(rowE)}>
            <img src={rowE} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowF)}>
            <img src={rowF} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowG)}>
            <img src={rowG} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowH)}>
            <img src={rowH} alt="branding" />
          </div>
        </div>

        <div>
          <div onClick={() => handleImageClick(rowQ)}>
            <img src={rowQ} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowR)}>
            <img src={rowR} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowS)}>
            <img src={rowS} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowT)}>
            <img src={rowT} alt="branding" />
          </div>
        </div>

        <div>
          <div onClick={() => handleImageClick(rowU)}>
            <img src={rowU} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowV)}>
            <img src={rowV} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowW)}>
            <img src={rowW} alt="branding" />
          </div>
          <div onClick={() => handleImageClick(rowX)}>
            <img src={rowX} alt="branding" />
          </div>
        </div>
      </section>

      {/* Lighthouse overlay */}
      <div
        className={style.overlay}
        onClick={handleCloseOverlay}
        id="lighthouseOverlay"
      >
        <button onClick={closeBtn}>
          <CloseIcon sx={{ fontSize: "22px", fontWeight: "500" }} />
        </button>
        <div className={style.img_box}>
          <img src={overlayImage} alt="lighthouse" />
        </div>
      </div>
    </div>
  );
}
