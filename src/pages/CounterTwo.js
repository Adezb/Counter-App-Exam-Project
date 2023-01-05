import UseReducerCounter from "../components/UseReducerCounter";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CounterTwo = () => {
  const setvalueRef = useRef(null);
  const { count, increment, decrement, reset } = UseReducerCounter(0);
  const handleClick = () => {
    setvalueRef(setvalueRef.current.value - `${count}`);
  };

  return (
    <>
      <Helmet>
        <title>Counter Two</title>
        <meta
          name="description"
          content="This counter is controlled by useReducer counter hook."
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
      <div className="wrapper-two">
        <div className="counter-wrapper">
          <div className="counter-title">Counter Two </div>
          <p className="counter-description">UseReducer Counter</p>
          <div className="range" style={{ color: "#9cb7f3" }}>
            Count Range: 0 - 20
          </div>
          <div className="counter-box counter__two-highlight">{count}</div>
        </div>

        <div className="counter-btn-wrapper">
          <button
            disabled={count >= 20}
            className="counter-two-btn operation-btn"
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
            className="counter-two-btn operation-btn"
            onClick={decrement}
          >
            -
          </button>
        </div>
        <div className="set__value">
          <div className="input__value">
            <input
              ref={setvalueRef}
              name="number"
              type="number"
              placeholder="0"
            />
          </div>
          <button onClick={handleClick}>Set Value</button>
        </div>
      </div>
    </>
  );
};

export default CounterTwo;
