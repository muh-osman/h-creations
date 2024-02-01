// Sass
import style from "./Programing.module.scss";
// Images
import webOne from "../../assets/images/website/web-1.avif";
import webTwo from "../../assets/images/website/web-2.avif";
import webThree from "../../assets/images/website/web-3.avif";
import webFour from "../../assets/images/website/web-4.avif";
import webFive from "../../assets/images/website/web-5.avif";
import webSix from "../../assets/images/website/web-6.png";

export default function Programing() {
  return (
    <article className={style.container}>

      <section className={style.A}>
        <h1>نماذج لمواقع إلكترونية</h1>
        <div  className={style.img_box_A}>
          <div><img src={webTwo} alt="programing" /></div>
          <div><img src={webOne} alt="programing" /></div>
        </div>
      </section>

      <section className={style.B}>
        <h1>برمجة وتصميم منصات تعليمية</h1>
        <div  className={style.img_box_B}>
          <div><img src={webFour} alt="programing" /></div>
          <div><img src={webThree} alt="programing" /></div>
        </div>
      </section>

      <section className={style.C}>
        <h1>برمجة وتصميم مواقع تعريفية</h1>
        <div  className={style.img_box_C}>
          <div><img src={webFive} alt="programing" /></div>
        </div>
      </section>

      <section className={style.D}>
        <h1>تصميم شعارات</h1>
        <div  className={style.img_box_D}>
          <div><img src={webFive} alt="programing" /></div>
          <div><img src={webFive} alt="programing" /></div>
          <div><img src={webFive} alt="programing" /></div>
          <div><img src={webFive} alt="programing" /></div>
          <div><img src={webFive} alt="programing" /></div>
          <div><img src={webFive} alt="programing" /></div>
          <div><img src={webFive} alt="programing" /></div>
          <div><img src={webFive} alt="programing" /></div>
        </div>
      </section>





    </article>
  );
}
