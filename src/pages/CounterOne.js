import React from "react";
import MyCounter from "../customhook/MyCounter";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CounterOne = () => {
  const { count, increment, decrement, setValue, reset } = MyCounter(0);

  return (
    <>
      <Helmet>
        <title>Counter One</title>
        <meta
          name="description"
          content="This counter counts from 1 to 10 in Positive + and Negative -"
        />
      </Helmet>

      <div className="error-link">
        Go to <Link to="/error">Error 404 Page</Link>
      </div>
      <div className="wrapper-one">
        <div className="counter-wrapper">
          <div className="counter-title">Counter One</div>
          <p className="counter-description">Custom Hook Counter</p>
          <div className="counter-box">{count}</div>
        </div>

        <div className="counter-btn-wrapper">
          <button className="counter-one-btn" onClick={increment}>
            Increment +
          </button>
          <button className="counter-one-btn" onClick={setValue}>
            Set Value
          </button>
          <button className="counter-one-btn" onClick={decrement}>
            Decrement -
          </button>
        </div>

        <div className="reset-value">
          <button className="reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterOne;
