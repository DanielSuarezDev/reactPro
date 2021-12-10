import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product, InitialValues } from "../interfaces/types";

interface useProductsProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValue?: InitialValues;
}

export const useProducts = ({
  onChange,
  product,
  value = 0,
  initialValue,
}: useProductsProps) => {
  const [counter, setCounter] = useState<number>(initialValue?.count || value);
  const isMounted = useRef(false);

  const increasBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValue?.maxCount) {
      newValue = Math.min(newValue, initialValue.maxCount);
    }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValue?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    setCounter,
    increasBy,
    isMaxCountReached:
      !!initialValue?.count && initialValue.maxCount === counter,
    maxCount: initialValue?.maxCount,
    reset,
  };
};
