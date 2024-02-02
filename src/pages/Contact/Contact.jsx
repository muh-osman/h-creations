// Sass
import style from "./Contact.module.scss";
// Image
import contact from "../../assets/images/contact/contact.svg";
//
import useWindowDimensions from "../../utiles/useWindowDimensions";
// React
import { useEffect } from "react";

export default function Contact() {
  
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const { width } = useWindowDimensions();


  return (
    <div className={style.container}>
      {/* <h1>نحن هنا لمساعدتك</h1> */}

      <div className={style.image_box}>
        <img src={contact} alt="contact us" />
      </div>

      <div className={style.contact_box}>
        <div className={style.form_box}>
          <h1>تواصل معنا</h1>
          <form>
            {/* الاسم */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">
                الاسم:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                required
              />
            </div>
            {/*  البريد الالكتروني */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                البريد الالكتروني:
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            {/* رقم الهاتف */}
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                رقم الهاتف (اختياري):
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            {/* الرسالة */}
            <div className="form-group mb-3">
              <label
                className="form-label"
                htmlFor="exampleFormControlTextarea1"
              >
                الرسالة:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 special">
              إرسال
            </button>
          </form>
        </div>

        <div className={style.map_box}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d927143.4238513196!2d46.7041013!3d24.8072987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1706866718425!5m2!1sen!2s"
            width={width > 575 ? width / 2 : 350}
            height={width > 575 ? width / 2.6 : 350}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
