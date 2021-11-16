import styles from "../styles/styles.module.css";
import { useProducts } from "../hooks/useProducts";
import { createContext } from "react";
import { ProductContextProps, ProductCardProps } from "../interfaces/types";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
}: ProductCardProps) => {
  const { counter, increasBy } = useProducts();

  return (
    <Provider
      value={{
        counter,
        increasBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
