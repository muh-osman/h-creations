import "./Images.css";
import { useEffect, useState } from "react";
import api from "../../api";
// Icon
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Images() {
  const [images, setImages] = useState([]);
  const [clickedButtonId, setClickedButtonId] = useState(null);

  async function fetchData() {
    // setLoading(true);
    try {
      const res = await api.get("api/images");
      setImages(res.data);
      // setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function submitData(e, id) {
    e.preventDefault();
    const form = document.getElementById(`form-${id}`);
    const formData = new FormData(form);

    try {
      await api.post(`api/images/${id}?_method=PATCH`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Show the alert
      document.getElementById("success-alert").style.top = "77px";

      // Stop button animation
      setClickedButtonId(null);

      // Hide the alert after 5 seconds
      setTimeout(function () {
        document.getElementById("success-alert").style.top = "-5%";
      }, 4000);

      // Fetch data again
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }

  const imagesLoop = images.map(({ id, image, title, link }) => (
    <form
      onSubmit={(e) => submitData(e, id)}
      key={id}
      id={`form-${id}`}
      encType="multipart/form-data"
    >
      <div className="form-image-box">
        <img src={image} alt={title} />
      </div>

      <div className="mb-3">
        <label htmlFor={`exampleInputEmail${id}`} className="form-label">
          New image:
        </label>
        <input
          type="file"
          name="image"
          className="form-control"
          id={`exampleInputEmail${id}`}
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label htmlFor={`exampleInputTitle${id}`} className="form-label">
          New title:
        </label>
        <input
          defaultValue={title}
          type="text"
          name="title"
          className="form-control"
          id={`exampleInputTitle${id}`}
          aria-describedby="emailHelp"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor={`exampleInputLink${id}`} className="form-label">
          New link:
        </label>
        <input
          defaultValue={link}
          type="text"
          name="link"
          className="form-control"
          id={`exampleInputLink${id}`}
          aria-describedby="emailHelp"
          required
        />
      </div>

      <div className="text-center">
        <button
          onClick={() => setClickedButtonId(id)}
          type="submit"
          className="btn btn-primary mt-2 mb-2"
          style={{ width: "53px", height: "38px" }}
        >
          {clickedButtonId === id ? (
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
  ));

  return (
    <div className="images-container">
      <div
        className="alert alert-success d-flex align-items-center alert_hide_me"
        role="alert"
        id="success-alert"
      >
        <CheckCircleOutlineIcon className="me-2 fs-4" />
        <div>All changes saved</div>
      </div>

      {imagesLoop}
    </div>
  );
}
