import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <Helmet>
        <title>Error 404</title>
        <meta name="description" content="This is an error page" />
      </Helmet>
      <h2>404 Page Not Found.</h2>
      <p>
        Go back to
        <Link to="/" className="link">
          Counter One
        </Link>
        <Link to="/countertwo" className="link">
          Counter Two
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
