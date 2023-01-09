import { useReducer } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const defaultState = { counter: 0, input: "" };

const reducer = (state = { name: "" }, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "reset":
      return defaultState;
    case "setvalue":
      return { ...state, input: action.payload };
    case "updatecounter":
      return { ...state, counter: action.payload };
    default:
      throw new Error("Invalid action type");
  }
};

export default function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleClick = () => {
    dispatch({
      type: "updatecounter",
      payload: state.input - `${state.counter}`,
    });
  };

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  const handleOnChange = (e) => {
    dispatch({ type: "setvalue", payload: e.target.value });
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
      <div className="main__wrapper wrapper-two">
        <div className="counter__wrapper">
          <div className="counter-title">Counter Two </div>
          <p className="counter-description">UseReducer Counter</p>
          <div className="range" style={{ color: "#9cb7f3" }}>
            Count Range: 0 - 20
          </div>
          <div className="counter-box counter__two-highlight">
            {state.counter}
          </div>
        </div>

        <div className="counter-btn-wrapper">
          <button
            disabled={state.counter >= 20}
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
            disabled={state.counter <= 0}
            className="counter__btn operation-btn"
            onClick={decrement}
          >
            -
          </button>
        </div>
        <div className="set__value">
          <div className="input__value">
            <input
              onChange={handleOnChange}
              value={state.input}
              name="number"
              type="text"
              placeholder="0"
            />
          </div>
          <button onClick={handleClick}>Set Value</button>
        </div>
      </div>
    </>
  );
}
