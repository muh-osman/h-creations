// React
import { useEffect } from "react";
// React router
import { Link } from "react-router-dom";
// Sass
import style from "./SocialMedia.module.scss";

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
        <h1>ماذا نقدم فى إدارة صفحات السوشيال ميديا؟</h1>
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



    </article>
  );
}
