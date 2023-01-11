import React, { useState, useEffect } from "react";
import MyCounter from "../customhook/MyCounter";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const CounterOne = () => {
  const [countlimit, setCountlimit] = useState(false);

  const { count, increment, decrement, setValue, reset, inputRef } =
    MyCounter(0);

  useEffect(() => {
    if (count === 20) {
      setCountlimit(true);
    } else {
      return;
    }
  }, [count]);

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
      <div className="main__wrapper">
        <div className="counter__wrapper">
          <div className="counter-title">Counter One</div>
          <p className="counter-description">Custom Hook Counter</p>
          <div className="range">
            {countlimit && count === 20 ? (
              <div style={{ color: "red", fontWeight: "bolder" }}>
                Count Limit Reached!
              </div>
            ) : (
              "Count Limit: 20"
            )}
          </div>
          <div className="counter-box">{count}</div>
        </div>

        <div className="counter-btn-wrapper">
          <button
            disabled={count <= 0}
            className="counter__btn operation-btn"
            onClick={decrement}
          >
            -
          </button>

          {/* Reset Button  */}

          <button className="reset-btn" onClick={reset}>
            <FontAwesomeIcon className="reset__icon" icon={faRefresh} />
          </button>

          <button
            disabled={count === 20}
            className="counter__btn operation-btn"
            onClick={increment}
          >
            +
          </button>
        </div>
        <div className="set__value">
          <div className="input__value">
            <input ref={inputRef} name="number" type="text" placeholder="0" />
          </div>
          <button onClick={setValue}>Set Value</button>
        </div>
      </div>
    </>
  );
};

export default CounterOne;
