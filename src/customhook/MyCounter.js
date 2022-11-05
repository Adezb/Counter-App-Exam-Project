import { useState } from "react";

export default function MyCounter(defaultValue) {
  const [count, setCount] = useState(defaultValue || 0);

  const increment = () => setCount((countValue) => countValue + 1);
  const decrement = () => setCount((countValue) => countValue - 1);
  const setValue = () => setCount(Math.floor(Math.random() * 21));
  const reset = () => setCount(defaultValue || 0);

  return { count, increment, decrement, setValue, reset };
}
