import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    return axios
      .get("https://localhost:44310/api/Companies")
      .then((result) => setCompanies(result.data));
  }, []);
  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          {companies.map((company) => (
            <div className="col-4" key={company.id}>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{company.companyName}</h5>
                  <Link to={`/companydetail/${company.id}`}><button className="col-12 btn btn-info"> Firma Detayı</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
