import "./Video.css";
import { useEffect, useState } from "react";
import api from "../../api";
import videoImage from "../../assets/images/dashboard/video.jpg";

export default function Video() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [video, setVideo] = useState("");

  async function fetchData() {
    setLoading(true);
    try {
      const res = await api.get("api/video/1");
      // console.log(res.data.video.video);
      setLoading(false);
      setVideo(res.data.video.video);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function submitData(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("api/video/1?_method=PATCH", {
        video: video,
      });
      setLoading(false);
      setMessage("All change saved.");
      // console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="video-container">
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
          <div id="emailHelp" className="form-text">
            {message}
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "53px", height: "38px" }}
          >
            {loading ? (
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
  );
}
