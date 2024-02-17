import "./Images.css";
import { useEffect, useState } from "react";
import api from "../../api";
import imageImages from "../../assets/images/dashboard/images.jpg";

export default function Images() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await api.get("api/images");
      setImages(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function submitData(e, id) {
    e.preventDefault();
    setLoading(true);
    const form = document.getElementById(`form-${id}`);
    const formData = new FormData(form);

    try {
      const res = await api.post(`api/images/${id}?_method=PATCH`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(false);
      setMessage("All changes saved");
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

      <div className="form-text mb-3">{message}</div>

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
  ));

  return <div className="images-container">{imagesLoop}</div>;
}
