// React
import { useEffect } from "react";
// Sass
import style from "./Marketing.module.scss";

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



      <section>
        
      </section>


    </div>
  );
}
