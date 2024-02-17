import "./Sale.css";
import { useEffect, useState } from "react";
import api from "../../api";
import saleImage from "../../assets/images/dashboard/sale.jpg";

export default function Sale() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [sale, setSale] = useState("");

  async function fetchData() {
    setLoading(true);
    try {
      const res = await api.get("api/sale/1");
      // console.log(res.data.sale.sale);
      setLoading(false);
      setSale(res.data.sale.sale);
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
      const res = await api.post("api/sale/1?_method=PATCH", {
        sale: sale,
      });
      setLoading(false);
      setMessage("All change saved.");
      // console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="sale-container">
      <div className="img-box">
        <img src={saleImage} alt="sale" />
      </div>
      <form onSubmit={submitData}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter the discount value %
          </label>
          <input
            value={sale}
            onChange={(e) => setSale(e.target.value)}
            type="number"
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
