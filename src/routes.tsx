import React from "react";
import { Router, Route, ReactLocation } from "react-location";
import { ProductPage } from "./pages";

const routes: Route[] = [
  {
    path: "/",
    element: (
      <div>
        <h1 className="text-2xl">Home Page</h1>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <h1 className="text-2xl">About Page</h1>
      </div>
    ),
  },
  {
    path: "product",
    children: [
      {
        path: ":id",
        element: <ProductPage />,
      },
    ],
  },
];

const location = new ReactLocation();

export const Routes = ({ children }) => (
  <Router routes={routes} location={location}>
    {children}
  </Router>
);
