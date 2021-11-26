import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/types";

export const useShoppingCart = () => {
  const [shopingCart, setShopingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const handleProductChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShopingCart((prevState) => {
      const productInCart: ProductInCart = prevState[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prevState,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: _, ...rest } = prevState;
      return { ...rest };

      //   return {

      //   // if (count === 0) {
      //   //   const { [product.id]: _, ...rest } = prevState;
      //   //   return rest;
      //   // }

      //   // return {
      //   //   ...prevState,
      //   //   [product.id]: { ...product, count },
      //   // };
      // }
    });
  };

  return {
    handleProductChange,
    shopingCart,
  };
};
