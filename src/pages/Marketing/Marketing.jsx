// React
import { useEffect } from "react";
// React router
import { Link } from "react-router-dom";
// Sass
import style from "./Marketing.module.scss";
// Images
import seo from "../../assets/images/markiting/seo.png";

import servA from "../../assets/images/markiting/ads.png";
import servB from "../../assets/images/markiting/seo-service.png";
import servC from "../../assets/images/markiting/Influencer.png";
import servD from "../../assets/images/markiting/social.png";
import servE from "../../assets/images/markiting/email.png";

export default function Marketing() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className={style.container}>
      <section className={style.A} dir="ltr">
        <h1>
          DIGITAL
          <br />
          MARKETING
        </h1>

        {/* <h1>DIGITAL</h1> */}
        {/* <h1>MARKETING</h1> */}
      </section>

      <section className={style.C}>
        <h1>خدماتنا في مجال التسويق</h1>

        <div className={style.C_box}>
          <div>
            <div>
              <h3>تحسين محركات البحث SEO</h3>
            </div>
            <hr />
            <div>
              <img src={servB} alt="marketing" />
            </div>
          </div>

          <div>
            <div>
              <h3>الاعلانات الرقمية</h3>
            </div>
            <hr />
            <div>
              <img src={servA} alt="marketing" />
            </div>
          </div>

          <div>
            <div>
              <h3>التسويق عبر المؤثرين</h3>
            </div>
            <hr />
            <div>
              <img src={servC} alt="marketing" />
            </div>
          </div>

          <div>
            <div>
              <h3>التسويق عبر وسائل التواصل الاجتماعي</h3>
            </div>
            <hr />
            <div>
              <img src={servD} alt="marketing" />
            </div>
          </div>

          <div>
            <div>
              <h3>حملات البريد الالكتروني</h3>
            </div>
            <hr />
            <div>
              <img src={servE} alt="marketing" />
            </div>
          </div>
        </div>
      </section>

      <section className={style.B}>
        <h1>تحسين محركات البحث | SEO</h1>

        <div className={style.B_box}>
          <div>
            <h2>
              تصدر النتائج الاولى في محركات البحث وحول زوار موقعك الى عملاء
              فعليين
            </h2>
            <h6>
              على الرغم من أن معظم الأشخاص يعتقدون أن تهيئة محركات البحث SEO
              يتعلق فقط بتحسين موقع الويب الخاص بك لمحركات البحث، إلا أن تهيئة
              محركات البحث يتضمن أيضًا تحسين تجربة المستخدم على موقع الويب. إن
              موقع ويب نظيف جيد التنظيم ومرتب يجبر المستخدم على قضاء المزيد من
              الوقت على الموقع، وبالتالي تقليل معدل الارتداد وزيادة عدد مرات
              مشاهدة الصفحة.
            </h6>
            <Link to="/contact">اطلب الآن</Link>
          </div>
          <div>
            <img src={seo} alt="seo" />
          </div>
        </div>
      </section>
    </div>
  );
}
