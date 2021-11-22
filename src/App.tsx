import React from "react";
import ReactDOM from "react-dom";
import { Link, Outlet } from "react-location";
import { Routes } from "./routes";

import "./index.scss";

const App = () => (
  <Routes>
    <div className="container m-auto bg-gray-100 h-screen">
      <div className="p-5">
        <Link className="text-blue-500 mr-4" to="/">
          Home Page
        </Link>
        <Link className="text-blue-500 mr-4" to="/about">
          About Page
        </Link>
        <Link className="text-blue-500" to="/product/1">
          Product Page
        </Link>
      </div>
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  </Routes>
);
ReactDOM.render(<App />, document.getElementById("app"));
