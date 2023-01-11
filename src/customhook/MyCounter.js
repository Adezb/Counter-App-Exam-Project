import { useState, useRef } from "react";

export default function MyCounter(defaultValue) {
  const [count, setCount] = useState(defaultValue || 0);
  const inputRef = useRef(null);

  const increment = () => setCount((countValue) => countValue + 1);
  const decrement = () => setCount((countValue) => countValue - 1);
  const setValue = () => setCount(inputRef.current.value - `${count}`);
  const reset = () => setCount(defaultValue);

  return { count, increment, decrement, setValue, reset, inputRef };
}
