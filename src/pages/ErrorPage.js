import React from "react";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <Helmet>
        <title>Error 404</title>
        <meta name="description" content="This is an error page" />
      </Helmet>
      <h2>404 Error</h2>
      <p>Click the Reset button to reset counter.</p>
    </div>
  );
};

export default ErrorPage;
