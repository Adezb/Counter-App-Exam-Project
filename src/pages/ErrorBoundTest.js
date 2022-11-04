import { Helmet } from "react-helmet-async";
import MyCounter from "../customhook/MyCounter";

const ErrorBoundTest = () => {
  const { count, increment } = MyCounter();
  if (count >= 2) {
    throw new Error();
  } else {
    return (
      <div className="boundary-test">
        <Helmet>
          <title>Error Boundary Test Page</title>
          <meta name="description" content="A page to test error boundary" />
        </Helmet>
        <p>Click the button twice to test Error Boundary</p> <br />
        <div className="count-boundary">{count}</div>
        <button className="boundary-test-btn" onClick={increment}>
          Error Boundary Test
        </button>
      </div>
    );
  }
};

export default ErrorBoundTest;
