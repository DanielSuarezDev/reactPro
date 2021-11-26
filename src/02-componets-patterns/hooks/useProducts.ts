import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/types";

interface useProductsProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProducts = ({
  onChange,
  product,
  value = 0,
}: useProductsProps) => {
  const [counter, setCounter] = useState(value);

  const isControl = useRef(!!onChange);

  const increasBy = (value: number) => {
    if (isControl.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    setCounter,
    increasBy,
  };
};
