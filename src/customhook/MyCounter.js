import { useState, useRef } from "react";

export default function MyCounter(defaultValue) {
  const inputRef = useRef(null);
  const [count, setCount] = useState(defaultValue || 0);

  const increment = () => setCount((countValue) => countValue + 1);
  const decrement = () => setCount((countValue) => countValue - 1);
  const setValue = () => setCount(inputRef.current.value - `${count}`);
  const reset = () => setCount(defaultValue || 0);

  return { count, increment, decrement, setValue, reset, inputRef };
}
