import { useReducer } from "react";

function reducer(counter = 0, action) {
  if (action.type === "increment") {
    return counter + 1;
  } else if (action.type === "decrement") {
    return counter - 1;
  } else if (action.type === "reset") {
    return 0;
  } else if (action.type === "setvalue") {
    return Math.floor(Math.random() * 21);
  } else {
    return counter;
  }
}

const UseReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  const setValue = () => {
    dispatch({ type: "setvalue" });
  };

  return { increment, decrement, reset, count, setValue };
};

export default UseReducerCounter;
