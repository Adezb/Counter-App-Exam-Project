import UseReducerCounter from "../components/UseReducerCounter";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CounterTwo = () => {
  const { count, increment, decrement, reset } = UseReducerCounter(0);

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
      <div className="main__wrapper wrapper-two">
        <div className="counter__wrapper">
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
            className="counter__btn operation-btn"
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
            className="counter__btn operation-btn"
            onClick={decrement}
          >
            -
          </button>
        </div>
        <div className="set__value">
          <div className="input__value">
            <input name="number" type="text" placeholder="0" />
          </div>
          <button>Set Value</button>
        </div>
      </div>
    </>
  );
};

export default CounterTwo;
