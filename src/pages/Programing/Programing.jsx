// Sass
import style from "./Programing.module.scss";
// React
import { useEffect } from "react";
// Icons
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
// Images
import webOne from "../../assets/images/website/web-1.avif";
import webTwo from "../../assets/images/website/web-2.avif";
import webThree from "../../assets/images/website/web-3.avif";
import webFour from "../../assets/images/website/web-4.avif";
import webFive from "../../assets/images/website/web-5.avif";

// import logoA from "../../assets/images/website/app-1.avif";
// import logoB from "../../assets/images/website/app-2.avif";
// import logoC from "../../assets/images/website/app-3.avif";
// import logoD from "../../assets/images/website/app-4.avif";
// import logoE from "../../assets/images/website/app-5.avif";
// import logoF from "../../assets/images/website/app-6.jpg";
// import logoG from "../../assets/images/website/app-7.jpg";
// import logoH from "../../assets/images/website/app-8.jpg";

import storeOne from "../../assets/images/website/store-1.jpg";
import storeTwo from "../../assets/images/website/store-2.jpg";
import storeThree from "../../assets/images/website/store-3.png";
import storeFour from "../../assets/images/website/store-4.png";
import storeFive from "../../assets/images/website/store-5.png";

export default function Programing() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <article className={style.container}>
      <section className={style.O} dir="ltr">
        <h1>
          CREATE
          <br />
          WEBSITES
        </h1>
      </section>

      <section className={style.C}>
        <h1>برمجة وتصميم مواقع تعريفية</h1>
        <div className={style.img_box_C}>
          <div>
            <img src={webFive} alt="programing" />
            <a href="https://salthaqafy.com/">salthaqafy.com</a>
          </div>
        </div>
      </section>

      <section className={style.A}>
        <h1>نماذج لمواقع إلكترونية</h1>
        <div className={style.img_box_A}>
          <div>
            <img src={webTwo} alt="programing" />
            <a href="https://pro-educa.com/">pro-educa.com</a>
          </div>
          <div>
            <img src={webOne} alt="programing" />
            <a href="https://chart-idea.com/">chart-idea.com</a>
          </div>
        </div>
      </section>

      <section className={style.B}>
        <h1>برمجة وتصميم منصات تعليمية</h1>
        <div className={style.img_box_B}>
          <div>
            <img src={webFour} alt="programing" />
            <a href="#">under construction</a>
          </div>
          <div>
            <img src={webThree} alt="programing" />
            <a href="https://halthaqafy.com/">halthaqafy.com</a>
          </div>
        </div>
      </section>

      <section className={style.E}>
        <h1>إنشاء متاجر الكترونية</h1>

        <div className={style.E_inner_box}>
          <div className={style.E_inner_box_one}>
            <a href="https://mix-mart.myfathershops.com">
              <FaChevronRight /> mix-mart.com
            </a>
          </div>
          <div className={style.E_inner_box_two}>
            <img src={storeOne} alt="E-store" />
          </div>
        </div>
      </section>

      <section className={style.F}>
        <div className={style.F_inner_box}>
          <div className={style.F_inner_box_one}>
            <a href="https://smart-select.myfathershops.com/">
              smart-select.com <FaChevronLeft />
            </a>
          </div>
          <div className={style.F_inner_box_two}>
            <img src={storeTwo} alt="E-store" />
          </div>
        </div>
      </section>

      <section className={style.E}>
        <div className={style.E_inner_box}>
          <div className={style.E_inner_box_one}>
            <a href="https://shop-it.myfathershops.com/">
              <FaChevronRight /> shop-it.com
            </a>
          </div>
          <div className={style.E_inner_box_two}>
            <img src={storeThree} alt="E-store" />
          </div>
        </div>
      </section>

      <section className={style.F}>
        <div className={style.F_inner_box}>
          <div className={style.F_inner_box_one}>
            <a href="https://trendhouse1.myfathershops.com/">
              trendhouse1.com <FaChevronLeft />
            </a>
          </div>
          <div className={style.F_inner_box_two}>
            <img src={storeFour} alt="E-store" />
          </div>
        </div>
      </section>

      <section className={style.E}>
        <div className={style.E_inner_box}>
          <div className={style.E_inner_box_one}>
            <a href="https://superbuy.myfathershops.com/">
              <FaChevronRight /> superbuy.com
            </a>
          </div>
          <div className={style.E_inner_box_two}>
            <img src={storeFive} alt="E-store" />
          </div>
        </div>
      </section>

      {/* <section className={style.D}>
        <h1>برمجة وتصميم تطبيقات الجوال</h1>
        <div className={style.img_box_D}>
          <div>
            <img src={logoD} alt="programing" />
          </div>
          <div>
            <img src={logoB} alt="programing" />
          </div>
          <div>
            <img src={logoC} alt="programing" />
          </div>
          <div>
            <img src={logoA} alt="programing" />
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
      </section> */}

    </article>
  );
}
