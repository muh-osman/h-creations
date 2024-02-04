// React
import { useEffect } from "react";
// Sass
import style from "./Marketing.module.scss";
// Images
import seo from "../../assets/images/markiting/seo.png";

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

      <section className={style.B}>
        <h1>تحسين محركات البحث | SEO</h1>

        <div className={style.B_box}>
          <div>
            <h2>
              تصدر النتائج الاولى في محركات البحث وحول زوار موقعك الى عملاء
              فعليين
            </h2>
            <h6>
              تساعد تحسين وتهيئة محركات البحث SEO في إنشاء موقع ويب أكثر سلاسة
              وسرعة وسهولة في الاستخدام. على الرغم من أن معظم الأشخاص يعتقدون أن
              تهيئة محركات البحث SEO يتعلق فقط بتحسين موقع الويب الخاص بك
              لمحركات البحث، إلا أن تهيئة محركات البحث يتضمن أيضًا تحسين تجربة
              المستخدم على موقع الويب. إن موقع ويب نظيف جيد التنظيم ومرتب يجبر
              المستخدم على قضاء المزيد من الوقت على موقع الويب، وبالتالي تقليل
              معدل الارتداد وزيادة عدد مرات مشاهدة الصفحة.
            </h6>
          </div>
          <div>
            <img src={seo} alt="seo" />
          </div>
        </div>
      </section>
    </div>
  );
}
