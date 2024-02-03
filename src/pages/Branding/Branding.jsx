// React
import { useEffect } from "react";
// Sass
import style from "./Brandin.module.scss";
//
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

export default function Branding() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className={style.container}>

      <section className={style.A}>

        <h1>BRAND<br/>DESIGN</h1>

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
        <h1>هويات بصرية</h1>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          {/* <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div> */}
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
        </div>
      </section>
    </div>
  );
}
