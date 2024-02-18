import "./Video.css";
import { useEffect, useState } from "react";
import api from "../../api";
import videoImage from "../../assets/images/dashboard/video.jpg";
// icon
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Video() {
  const [video, setVideo] = useState("");
  const [clickedButton, setClickedButton] = useState(true);

  async function fetchData() {
    try {
      const res = await api.get("api/video/1");
      // console.log(res.data.video.video);
      setVideo(res.data.video.video);
      setClickedButton(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function submitData(e) {
    e.preventDefault();
    setClickedButton(true);
    try {
      await api.post("api/video/1?_method=PATCH", {
        video: video,
      });

      // Show the alert
      document.getElementById("success-alert").style.top = "77px";

      // Stop button animation
      setClickedButton(false);

      // Hide the alert after 5 seconds
      setTimeout(function () {
        document.getElementById("success-alert").style.top = "-5%";
      }, 4000);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="video-container">
      <div
        className="alert alert-success d-flex align-items-center alert_hide_me"
        role="alert"
        id="success-alert"
      >
        <CheckCircleOutlineIcon className="me-2 fs-4" />
        <div>All changes saved</div>
      </div>

      <div className="video-box">
        <div className="img-box">
          <img src={videoImage} alt="video" />
        </div>
        <form onSubmit={submitData}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter YouTube embed code:
            </label>
            <input
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "53px", height: "38px" }}
            >
              {clickedButton ? (
                <div
                  className="spinner-border spinner-border-sm"
                  role="status"
                ></div>
              ) : (
                "Edit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
