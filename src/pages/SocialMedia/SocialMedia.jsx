// React
import { useEffect } from "react";
// React router
import { Link } from "react-router-dom";
// Sass
import style from "./SocialMedia.module.scss";
// Icons
import instagram from "../../assets/images/social/instagram.webp";
import snapchat from "../../assets/images/social/snapchat.png";
import tiktok from "../../assets/images/social/tiktok.webp";

export default function SocialMedia() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <article className={style.container}>
      <section className={style.hero}></section>

      <section className={style.A}>
        <h1>ماذا نقدم في إدارة صفحات السوشيال ميديا؟</h1>
        <h4>
          من خلال خدمات إدارة صفحات السوشيال ميديا على مختلف منصات التواصل
          الاجتماعي (فيسبوك، يوتيوب، تويتر، إنستجرام، ولينكد إن تيك توك، سناب
          شات وغيرها)، نقدم لك محتوي عبقري وتصميمات إحترافية تناسب عملائك
          المهتمين بأعمالك، بالاضافة الى خطة عمل مدروسة لإدارة صفحاتك على هذه
          المنصات وتحقيق أهدافك التسويقية.
        </h4>
        <Link to="/contact">احصل على إستشارة مجانية الآن</Link>
      </section>
      <div>
        <svg
          className={style.tringle}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="#171615" points="0,0  100,0  50,50" />
        </svg>
      </div>

      <main className="experience" id="experience">
        <h1>خطة عمل ادارة مواقع التواصل الاجتماعي</h1>

        <article className="article-experience">
          <section className="section-experience">
            <div>
              <h2>تحليل حسابات المنصات الاجتماعية</h2>
              <p>المرحلة الأولى</p>
            </div>
            <div>
              <h2>Analysis</h2>
              <p>
                تحليل المعلومات عن أداء منصات التواصل الاجتماعي الخاصة بك
                والمنافسين لوضع خطة عمل تفاعلية لعلامتك التجارية
              </p>
            </div>
          </section>
          <section className="section-experience">
            <div>
              <h2>النشر والجدولة</h2>
              <p>المرحلة الثانية</p>
            </div>
            <div>
              <h2>Scheduling</h2>
              <p>
                جدولة المنشورات مسبقا وفقا للأوقات تواجد الجمهور المستهدف على
                الحسابات المختلفة
              </p>
            </div>
          </section>
          <section className="section-experience" style={{ margin: 0 }}>
            <div>
              <h2>المتابعة الدورية</h2>
              <p>المرحلة الثالثة</p>
            </div>
            <div>
              <h2>Follow-up</h2>
              <p>
                مراجعة حسابات التواصل الاجتماعي واستراتيجيات المحتوى بشكل دوري
                ومن ثم تحليل أداء منشوراتك ومدى تفاعل الجمهور المستهدف وتحديد
                العناصر الأكثر فاعلية والتركيز عليها
              </p>
            </div>
          </section>

          <div className="progressbar">
            <div className="line"></div>
            <div>
              <div className="circle" style={{ background: "#286F6C" }}></div>
            </div>
            <div>
              <div className="circle" style={{ background: "#F2704E" }}></div>
            </div>
            <div>
              <div className="circle" style={{ background: "#EEC048" }}></div>
            </div>
          </div>
        </article>
      </main>

      <h1 style={{ textAlign: "center", fontWeight: "700", marginTop: "64px" }}>
        مشاريع نعمل عليها الآن
      </h1>
      <section className={style.B} id="services">
        <div className="left-services">
          <div>
            <div className="image-box-one">
              <img src={instagram} alt="computer logo" />
            </div>
            <div className="services-title">
              <h2>صفحة انستغرام</h2>
              <h3>76 صفحة</h3>
            </div>
          </div>

          <div>
            <div className="image-box-two">
              <img src={snapchat} alt="phone logo" />
            </div>
            <div className="services-title">
              <h2>حساب سناب شات</h2>
              <h3>63 حساب</h3>
            </div>
          </div>

          <div>
            <div className="image-box-three">
              <img src={tiktok} alt="brand logo" />
            </div>
            <div className="services-title">
              <h2>حساب تيك توك</h2>
              <h3>47 حساب</h3>
            </div>
          </div>
        </div>

        <div className="right-services">
          <h1>تخطيط وادارة محتوى صفحات السوشال ميديا!</h1>
          <p>
            ادارة مواقع التواصل الاجتماعي وزيادة التفاعل والمتابعين بالشكل
            الاحترافي هي أحد أركان نجاح وانتشار العلامة التجارية ووصولها إلى
            الجمهور المستهدف في الوقت والمكان المناسب.
          </p>
          <p>
            نقوم بتخطيط وإدارة المحتوى المناسب لحسابات التواصل الاجتماعي ونقوم
            بتصميم هذا المحتوى بنشره ومتابعة ادائه وتحسينه بشكل مستمر ليكون اكثر
            مناسبة لجمهورك المستهدف.
          </p>
          <div>
            <div>
              <h2>285+</h2>
              <h3>مشروع مكتمل</h3>
            </div>
            <div>
              <h2>190+</h2>
              <h3>عميل</h3>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
