// React
import { useEffect } from 'react';
// Sass
import style from './Marketing.module.scss'

export default function Marketing() {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);


  return (
    <div className={style.container}>Marketing</div>
  )
}
