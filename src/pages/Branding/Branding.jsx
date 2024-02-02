// React
import { useEffect } from 'react';
// Sass
import style from './Brandin.module.scss'


export default function Branding() {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);


  return (
    <div className={style.container}>Branding Page</div>
  )
}
