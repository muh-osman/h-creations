import "./Services.css";
import { useEffect, useState } from "react";
import api from "../../api";
// MUI icons
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Services() {
  const [services, setServices] = useState([]);
  const [clickedButton, setClickedButton] = useState(false);

  async function fetchData() {
    try {
      const res = await api.get("api/services");
      setServices(res.data);
      // console.log(res.data);
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
    const form = document.getElementById("services-form");
    const formData = new FormData(form);
    const updatedServices = [];

    for (let pair of formData.entries()) {
      const [key, value] = pair;
      if (key.startsWith("service-")) {
        const id = key.split("-")[1];
        updatedServices.push({ id, service: value });
      }
    }

    try {
      await api.post("api/services/update", { services: updatedServices });

      // Show the alert
      document.getElementById("success-alert").style.top = "77px";

      // Stop button animation
      setClickedButton(false);

      // Hide the alert after 5 seconds
      setTimeout(function () {
        document.getElementById("success-alert").style.top = "-5%";
      }, 4000);

      // Fetch data again
      fetchData();
    } catch (err) {
      console.error(err);
      setClickedButton(false);
    }
  }

  const servicesLoop = services.map(({ id, service }) => (
    <div className="mb-3 serv_box" key={id}>
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz cusom_svg"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="VerifiedUserIcon"
      >
        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>

      <input
        dir="rtl"
        value={service}
        onChange={(e) => {
          const updatedServices = services.map((s) =>
            s.id === id ? { ...s, service: e.target.value } : s
          );
          setServices(updatedServices);
        }}
        type="text"
        name={`service-${id}`}
        className="form-control"
        required
      />
    </div>
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

      {/* Form */}
      <form onSubmit={submitData} id="services-form">
        {servicesLoop}

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary mt-2 mb-2"
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
  );
}
