import { useReducer } from "react";

function reducer(counter = 0, action) {
  if (action.type === "increment") {
    return counter + 1;
  } else if (action.type === "decrement") {
    return counter - 1;
  } else if (action.type === "reset") {
    return 0;
  } else {
    return counter;
  }
}

const UseReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  // const [inputValues, setInputValues] = useReducer(
  //   (state, newState) => ({ ...state, ...newState }),
  //   { count: "" }
  // );

  // const handleOnChange = (event) => {
  //   const { value } = event.target.value;
  //   setInputValues(value);
  // };

  // const handleClick = () => {
  //   setInputValues();
  // };

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return {
    increment,
    decrement,
    reset,
    count,
  };
};

export default UseReducerCounter;
