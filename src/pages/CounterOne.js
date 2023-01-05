import React from "react";
import MyCounter from "../customhook/MyCounter";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CounterOne = () => {
  const { count, increment, decrement, setValue, reset, inputRef } =
    MyCounter(0);

  return (
    <>
      <Helmet>
        <title>Counter One</title>
        <meta
          name="description"
          content="This counter is controlled by MyCounter Custom Hook."
        />
      </Helmet>

      <div className="error-link">
        <Link to="/error" className="link">
          404-Page
        </Link>{" "}
        <Link to="/errorboundtest" className="link">
          Error-Boundary
        </Link>
      </div>
      <div className="wrapper-one">
        <div className="counter-wrapper">
          <div className="counter-title">Counter One</div>
          <p className="counter-description">Custom Hook Counter</p>
          <div className="range">Count Range: 0 - 20</div>
          <div className="counter-box">{count}</div>
        </div>

        <div className="counter-btn-wrapper">
          <button
            disabled={count >= 20}
            className="counter-one-btn operation-btn"
            onClick={increment}
          >
            +
          </button>

          {/* Reset Button  */}

          <button className="reset-btn" onClick={reset}>
            Reset
          </button>

          <button
            disabled={count <= 0}
            className="counter-one-btn operation-btn"
            onClick={decrement}
          >
            -
          </button>
        </div>

        <div className="set__value">
          <div className="input__value">
            <input ref={inputRef} name="number" type="number" placeholder="0" />
          </div>
          <button onClick={setValue}>Set Value</button>
        </div>
      </div>
    </>
  );
};

export default CounterOne;
