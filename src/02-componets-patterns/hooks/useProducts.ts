import { useState } from "react";

export const useProducts = () => {
  const [counter, setCounter] = useState(0);

  const increasBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    setCounter,
    increasBy,
  };
};
