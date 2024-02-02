// React
import { useEffect } from 'react';
// Sass
import style from './SocialMedia.module.scss'

export default function SocialMedia() {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);


  return (
    <div className={style.container}>SocialMedia page</div>
  )
}
