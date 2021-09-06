import React from "react";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            Rent A Car
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/topcars"} className="nav-link">
                  Top 5 Cars
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/companies"} className="nav-link">
                  Companies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
