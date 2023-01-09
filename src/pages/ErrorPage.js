import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { images } from "../constants";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <Helmet>
        <title>Error 404</title>
        <meta name="description" content="This is an error page" />
      </Helmet>
      <h2>
        <img src={images.error404} alt="error-404" />
        <p className="error__description"> This page does not exist.</p>
      </h2>
      <p>
        Go back to
        <Link to="/" className="link">
          Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
