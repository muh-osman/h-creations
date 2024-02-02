// React
import { useEffect } from 'react';
// Sass
import style from './Brandin.module.scss'
// 
import logoA from "../../assets/images/branding/logo-1.png";
import logoB from "../../assets/images/branding/logo-2.png";
import logoC from "../../assets/images/branding/logo-3.png";
import logoD from "../../assets/images/branding/logo-4.png";
import logoE from "../../assets/images/branding/logo-5.png";
import logoF from "../../assets/images/branding/logo-6.png";
import logoG from "../../assets/images/branding/logo-7.png";
import logoH from "../../assets/images/branding/logo-8.png";


export default function Branding() {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);


  return (
    <div className={style.container}>
      
      <section className={style.D}>
        <h1>تصميم شعارات</h1>
        <div className={style.img_box_D}>
          <div>
            <img src={logoA} alt="programing" />
          </div>
          <div>
            <img src={logoB} alt="programing" />
          </div>
          <div>
            <img src={logoC} alt="programing" />
          </div>
          <div>
            <img src={logoD} alt="programing" />
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
      </section>

    </div>
  )
}
