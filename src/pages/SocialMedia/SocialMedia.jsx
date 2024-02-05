// React
import { useEffect } from 'react';
// Sass
import style from './SocialMedia.module.scss'
// Images
import hero from "../../assets/images/social/social-marketing.webp";

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
      
      <section className={style.hero}>
      </section>

      
      <section className={style.A}>
      </section>

    </article>
  )
}
