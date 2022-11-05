import UseReducerCounter from "../components/UseReducerCounter";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CounterTwo = () => {
  const { count, increment, decrement, setValue, reset } = UseReducerCounter(0);

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
        ||
        <Link to="/errorboundtest" className="link">
          Error-Boundary
        </Link>
      </div>

      <div className="wrapper-two">
        <div className="counter-wrapper">
          <div className="counter-title">Counter Two </div>
          <p className="counter-description">UseReducer Counter</p>

          <div className="counter-box">{count}</div>
        </div>

        <div className="counter-btn-wrapper">
          <button className="counter-two-btn" onClick={increment}>
            Increment +
          </button>
          <button className="counter-two-btn" onClick={setValue}>
            Set Value
          </button>
          <button className="counter-two-btn" onClick={decrement}>
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

export default CounterTwo;
