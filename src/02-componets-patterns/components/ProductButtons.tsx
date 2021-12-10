import { useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";

import { ProductContext } from "../components/ProductCard";

import { PropsButton } from "../interfaces/types";

export const ProductButtons = ({ className, style }: PropsButton) => {
  const { increasBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increasBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={` ${styles.buttonAdd} ${isMaxReached() && styles.disable}`}
        onClick={() => increasBy(+1)}
      >
        +
      </button>
    </div>
  );
};
