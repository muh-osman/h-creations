// Sass
import style from "./Home.module.scss";
// Reacr router
import { Link } from "react-router-dom";
// Images
import hero from "../../assets/images/home/hero.avif";
import iconOne from "../../assets/images/home/icon-1.avif";
import iconTwo from "../../assets/images/home/icon-2.avif";
import iconThree from "../../assets/images/home/icon-3.avif";
import iconFour from "../../assets/images/home/icon-4.avif";
import branding from "../../assets/images/home/branding.png";
// Icons
import { FaChevronRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className={style.container}>
      {/* Text hero */}
      <div className={style.hero_text_box} dir="ltr">
        <h1>
          <span>H</span>
          <br />
          CREATIONS
        </h1>
        <h6>Solutions to grow elegantly</h6>
      </div>

      {/* Image hero */}
      <div className={style.image_hero_box}>
        <img src={hero} alt="hero" />
      </div>

      {/* Soulutions */}
      <div className={style.soulution_box}>
        <h1>نقدم جميع حلول نمو الأعمال عبر الإنترنت</h1>
        <div className={style.soulution}>
          <Link to="branding" className={style.box}>
            <div>
              <img src={iconFour} alt="soulution" />
            </div>
            <div>
              <h5>تصميم جرافيك</h5>
            </div>
          </Link>

          <Link to="marketing" className={style.box}>
            <div>
              <img src={iconThree} alt="soulution" />
            </div>
            <div>
              <h5>تسويق</h5>
            </div>
          </Link>

          <Link to="socialmedia" className={style.box}>
            <div>
              <img src={iconTwo} alt="soulution" />
            </div>
            <div>
              <h5>إدارة سوشيال ميديا</h5>
            </div>
          </Link>

          <Link to="programing" className={style.box}>
            <div>
              <img src={iconOne} alt="soulution" />
            </div>
            <div>
              <h5>برمجة المواقع</h5>
            </div>
          </Link>
        </div>
      </div>

      {/* Branding */}
      <div className={style.branding_box}>
        <div>
          <img src={branding} alt="branding" />
          <h3 className="text-center m-0" style={{ color: "#707171" }}>
            انفرد بهوية بصرية مميزة تجعلك علامة تجارية لاتنسى
          </h3>
        </div>

        <div>
          <h1>Branding</h1>
          <h2>الهويات البصرية</h2>
          <Link to="branding">
            <FaChevronRight /> نماذج أعمال
          </Link>
        </div>
      </div>
    </div>
  );
}
