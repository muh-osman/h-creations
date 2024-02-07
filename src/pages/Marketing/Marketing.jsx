// React
import { useEffect } from "react";
// React router
import { Link } from "react-router-dom";
// Sass
import style from "./Marketing.module.scss";
// Images
import seo from "../../assets/images/markiting/seo.svg";

import servA from "../../assets/images/markiting/ads.svg";
import servB from "../../assets/images/markiting/seo-service.svg";
import servC from "../../assets/images/markiting/Influencer.svg";
import servD from "../../assets/images/markiting/social.svg";
import servE from "../../assets/images/markiting/email.svg";

import inful from "../../assets/images/markiting/Influ.svg";

import soc from "../../assets/images/markiting/soc.svg";

import mail from "../../assets/images/markiting/mail.svg";

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

      <section className={style.D}>
        <h1>التسويق عبر الإعلانات الرقمية</h1>

        <div className={style.D_box}>
          <div>
            <h2>أهمية الإعلانات الرقمية (Google Ads) في توسيع نشاطك:</h2>
            <h6>
              وضع خطة واستراتيجية الخاصة بـ الإعلانات الرقمية المدفوعة مهمة
              كبيرة لأنه يلزمها دراسة جيدة دقيقة للبيانات Data Analysis لوضع
              الشركة او النشاط الحالي ووضعها مقارنة بالمنافسين بالسوق بالإضافة
              إلى دراسة القنوات الإعلانية للسوشيال ميديا أو جوجل ادز وتأثيرها
              على الجمهور المستهدف ومدى التفاعل عليها ونتائجها للهدف الرئيسي ما
              ترتب عليها في توزيع تكلفة الإعلانات.
            </h6>
            <Link to="/contact">اطلب الآن</Link>
          </div>
          <div>
            <iframe

              src="https://www.youtube.com/embed/e8wJBq6vOAI?si=LgcI_fcexWsER2KJ"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className={style.B}>
        <h1>التسويق عبر المؤثرين</h1>

        <div className={style.B_box}>
          <div>
            <h2>حقق الانتشار لأعمالك من خلال التسويق بالمشاهير</h2>
            <h6>
              التسويق عبر المؤثرين تعتبر الآن من أفضل الطرق لزيادة الوعي بعلامتك
              التجارية والنمو السريع والوصول لجمهورك المستهدف فمن خلالها يمكنك
              زيادة عدد المتابعين والتفاعل المستمر معهم على منصات التواصل
              الاجتماعي المختلفة.
            </h6>
            <Link to="/contact">اطلب الآن</Link>
          </div>
          <div>
            <img src={inful} alt="seo" />
          </div>
        </div>
      </section>

      <section className={style.E}>
        <h1>التسويق عبر وسائل التواصل الاجتماعي</h1>

        <div className={style.E_box}>
          <div>
            <h2>تفاعل مع عملائك من خلال التسويق عبر وسائل التواصل الاجتماعي</h2>
            <h6>
              تعتبر منصات السوشيال ميديا التي يستخدمها أكثر من 8 مليار مستخدم في
              العالم نافذة للتخاطب بين الشركات أو المؤثرين والجمهور ومن خلالها
              يمكن بناء قاعدة كبيرة من العملاء المحتملين لك وتسهل التواصل مع
              العملاء الحاليين.
            </h6>
            <Link to="/contact">اطلب الآن</Link>
          </div>
          <div>
            <img src={soc} alt="seo" />
          </div>
        </div>
      </section>

      <section className={style.B}>
        <h1>حملات البريد الالكتروني</h1>

        <div className={style.B_box}>
          <div>
            <h2>أقوى وأنجح الوسائل التقليدية والحديثة في الآن ذاته</h2>
            <h6>
              رغم أن التسويق عبر البريد الإلكتروني (Email Marketing) يعد من أقدم
              وسائل التسويق الإلكتروني، إلا أنه يعتبر من أقوى قنوات التسويق
              وأفضلها! وذلك بسبب قدرته على الوصول إلى أكبر قدر من العملاء
              المهتمين الذين ترتبط بياناتهم وبريدهم الإلكتروني معك منذ التعامل
              الأول. والذي فيما بعد يتيح لك استخدامها لزيادة المبيعات وتقديم
              خدمة عملاء على أعلى مستويات التخصيص والتخصص.
            </h6>
            <Link to="/contact">اطلب الآن</Link>
          </div>
          <div>
            <img src={mail} alt="seo" />
          </div>
        </div>
      </section>
    </div>
  );
}
