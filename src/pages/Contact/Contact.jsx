// Sass
import style from "./Contact.module.scss";
// Image
import contact from "../../assets/images/contact/contact.svg";
import thankyou from "../../assets/images/contact/thankyou.png";
//
import useWindowDimensions from "../../utiles/useWindowDimensions";
// React
import { useEffect, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const { width } = useWindowDimensions();

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz1DQpJKDJQCzcFCidNIT1G4f7YeXblkhSMFNyud05DdPkb_tX7Tb2JMIMDLCgmeseGEA/exec";

  const form = document.forms["submit-to-google-sheet"];

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });
      console.log("Success!", res);
      setSubmitted(true);
    } catch (error) {
      console.error("Error!", error.message);
      setLoading(false);
    }
  }

  return (
    <div className={style.container}>
      {/* <h1>نحن هنا لمساعدتك</h1> */}

      <div className={style.image_box}>
        <img src={contact} alt="contact us" />
      </div>

      <div className={style.contact_box}>
        <div className={style.form_box}>
          <h1>تواصل معنا</h1>

          <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            {/* الاسم */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">
                الاسم:
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/*  البريد الالكتروني */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                البريد الالكتروني:
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* رقم الهاتف */}
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                رقم الهاتف (اختياري):
              </label>
              <input
                type="number"
                name="phone"
                className="form-control"
                id="exampleInputPassword1"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                name="message"
                id="exampleFormControlTextarea1"
                rows="3"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 special"
              disabled={loading}
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
              ) : (
                "إرسال"
              )}
            </button>

            <div
              className={style.form_overlay}
              style={submitted ? { height: "100%" } : null}
            >
              <div>
                <img src={thankyou} alt="thank you" />
              </div>
              <h3>شكرا</h3>
              <h3>تم ارسال طلبك بنجاح</h3>
            </div>
          </form>
        </div>

        <div className={style.map_box}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57990.47135128329!2d46.63286177254739!3d24.71299104626764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1707250890233!5m2!1sen!2s"
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
