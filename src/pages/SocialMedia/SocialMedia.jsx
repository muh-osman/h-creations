// Slider
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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

// Images
// import man1 from "../../assets/images/social/man-1.png";
// import man2 from "../../assets/images/social/man-2.jpg";
// import man3 from "../../assets/images/social/man-3.jpg";
// import man4 from "../../assets/images/social/man-4.jpg";
// import man5 from "../../assets/images/social/man-5.jpg";
// import man6 from "../../assets/images/social/man-6.jpg";

export default function SocialMedia() {
  
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   touchMove: true,
  //   useCSS: true,

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

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

      <h1
        style={{
          textAlign: "center",
          fontWeight: "700",
          marginTop: "64px",
          fontSize: "48px",
          padding: "16px",
        }}
      >
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
              <h3>16 صفحة</h3>
            </div>
          </div>

          <div>
            <div className="image-box-two">
              <img src={snapchat} alt="phone logo" />
            </div>
            <div className="services-title">
              <h2>حساب سناب شات</h2>
              <h3>13 حساب</h3>
            </div>
          </div>

          <div>
            <div className="image-box-three">
              <img src={tiktok} alt="brand logo" />
            </div>
            <div className="services-title">
              <h2>حساب تيك توك</h2>
              <h3>10 حساب</h3>
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

      {/* <section id="testimonials">
        <h1>من آراء عملائنا</h1>
        <p>
          فخورين أننا كنا شركاء بصناعة جزء من نجاح شركائنا الرائعين وسعيدين أننا
          أسعدناهم!
        </p>

        <div className="comments">
          <Slider {...settings} className="slider">
            <div className="testtimonial-card comment">
              <img src={man1} alt="" />
              <p dir="rtl">
                شركة محترمة ومحترفين في خدمات التسويق, نشهد لشركة H creation
                بالاحترام والاحترافية العالية في تعاملهم معنا. فهم يتمتعون
                بمستوى عالٍ من الشفافية والتفاهم
              </p>
              <hr />
              <h3>عبدالله رضوان</h3>
              <h6>Writer</h6>
            </div>
            <div className="testtimonial-card">
              <img src={man2} alt="" />
              <p dir="rtl">
                نوصي بشدة بالتعاون مع شركة H creation إذا كنتم تبحثون عن شريك
                موثوق ومؤهل في مجال التسويق الإلكتروني. فهم يضمنون لكم نتائج
                ممتازة وتجربة محترفة تفوق توقعاتكم.
              </p>
              <hr />
              <h3>فهد حميد</h3>
              <h6>Journalist</h6>
            </div>
            <div className="testtimonial-card">
              <img src={man3} alt="" />
              <p>
                شركة متميزة جدا في ادارة السوشيل ميديا والاعلانات المدفوعة
                ساعدونا كثير في التفاعل وجلب كثير من الاشتراكات نشكركم جزيلا على
                التعاون معكم وان شاء الله من المزيد من النجاح
              </p>
              <hr />
              <h3>محمد راشد</h3>
              <h6>CTO</h6>
            </div>
            <div className="testtimonial-card">
              <img src={man4} alt="" />
              <p dir="rtl">
                شركة H Creations تعتبر من الشركات الصادقة في التعامل معنا في
                انشاء الموقع باحترافية نشكركم على انشاء الموقع لنا، وتفهم
                متطلبات العميل بدقة واحترافية
              </p>
              <hr />
              <h3>عبدالرحمن السبع</h3>
              <h6>Youtuber</h6>
            </div>
            <div className="testtimonial-card">
              <img src={man5} alt="" />
              <p dir="rtl">
                شركة H creation للتسويق الالكترونية ساعدونا في انشاء الهوية
                والبيزنس من البداية شركتنا مع ادارة الموقع والسوشيل ميديا
                والاعلانات المدفوعة نشهد لهم بالاحترام والشفافية
              </p>
              <hr />
              <h3>عمر الجندي</h3>
              <h6>Influencer</h6>
            </div>
            <div className="testtimonial-card">
              <img src={man6} alt="" />
              <p dir="rtl">
                شركة H creation للتسويق الالكترونية هي الشريك الأمثل لنا في بناء
                هويتنا وتطوير أعمالنا من البداية. فقد قدموا لنا دعمًا قويًا في
                إدارة موقعنا والتواجد على وسائل التواصل الاجتماعي
              </p>
              <hr />
              <h3>علي شبانة</h3>
              <h6>Businessman</h6>
            </div>
          </Slider>
        </div>
      </section> */}


    </article>
  );
}
