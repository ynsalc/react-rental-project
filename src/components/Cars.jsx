import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Cars.css";

export default function Cars() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    return axios
      .get("https://localhost:44310/api/Cars")
      .then((result) => setCars(result.data));
  }, []);
  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          {cars.map((car) => (
            <div class="col-md-4" key={car.id}>
              <figure class="card card-product">
                <div class="img-wrap">
                  <img src="https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk=" />
                </div>
                <figcaption class="info-wrap">
                  <h4 class="title">{car.carName}</h4>
                  <div class="rating-wrap">
                    <div class="label-rating">
                      <b>Kilometre :</b> {car.kilometer}
                    </div>
                    <div class="label-rating">
                      <b>Deposito :</b> {car.deposite + " TL"}
                    </div>
                  </div>
                </figcaption>
                <div class="bottom-wrap">
                  <div className="row">
                    <div className="col-5">
                      <Link
                        to={`/cardetail/${car.id}`}
                        className="btn btn-sm btn-primary float-right"
                      >
                        Detaya Git
                      </Link>
                    </div>
                    <div className="col-7">
                      <div class="price-wrap h5 ml-2">
                        <span class="price-new">{car.price + " TL"}</span>{" "}<del class="price-old">$1980</del>
                      </div>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
