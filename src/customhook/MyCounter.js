import { useState } from "react";

export default function MyCounter(defaultValue) {
  const [count, setCount] = useState(defaultValue || 0);
  const [inputvalue, setInputvalue] = useState("");

  const increment = () => setCount((countValue) => countValue + 1);
  const decrement = () => setCount((countValue) => countValue - 1);
  const setValue = () => setCount(inputvalue - `${count}`);
  const reset = () => setCount(defaultValue);
  const handleOnChange = (e) => {
    setInputvalue(e.target.value);
  };

  return {
    count,
    increment,
    decrement,
    setValue,
    reset,
    handleOnChange,
    inputvalue,
  };
}
