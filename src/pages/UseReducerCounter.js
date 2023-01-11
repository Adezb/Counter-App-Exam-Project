import { useReducer, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

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
  const [countlimit, setCountlimit] = useState(false);
  const [valuelimit, setValueLimit] = useState(false);

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

  useEffect(() => {
    if (state.counter === 20) {
      setCountlimit(true);
    } else if (state.input >= 20) {
      setValueLimit(true);
    } else {
      return;
    }
  }, [state.counter, state.input]);

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
          <div className="range">
            {countlimit && state.counter === 20 ? (
              <div style={{ color: "red", fontWeight: "bolder" }}>
                Count Limit Reached!
              </div>
            ) : (
              "Count Limit: 20"
            )}
          </div>
          <div className="counter-box counter__two-highlight">
            {state.counter}
          </div>
        </div>

        <div className="counter-btn-wrapper">
          <button
            disabled={state.counter <= 0}
            aria-disabled={state.counter <= 0}
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
            disabled={state.counter === 20}
            aria-disabled={state.counter === 20}
            className="counter__btn operation-btn"
            onClick={increment}
          >
            +
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
          <button
            disabled={state.input >= 20}
            aria-disabled={state.input >= 20}
            onClick={handleClick}
          >
            {valuelimit && state.input >= 20 ? (
              <div style={{ color: "red", fontWeight: "bolder" }}>
                Limit Reached!
              </div>
            ) : (
              "Set Value"
            )}
          </button>
        </div>
      </div>
    </>
  );
}
