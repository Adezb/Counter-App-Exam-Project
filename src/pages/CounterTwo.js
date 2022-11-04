import UseReducerCounter from "../components/UseReducerCounter";
import { Helmet } from "react-helmet-async";

const CounterTwo = () => {
  const { count, increment, decrement, setValue, reset } = UseReducerCounter(0);

  return (
    <div className="wrapper-two">
      <Helmet>
        <title>Counter Two</title>
        <meta
          name="description"
          content="This counter is controlled by useReducer counter hook."
        />
      </Helmet>

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
  );
};

export default CounterTwo;
