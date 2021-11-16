import { useContext } from "react";
import { ProductContext } from "../components/ProductCard";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

import { PropsImages } from "../interfaces/types";

export const ProductImages = ({ img = "", className, style }: PropsImages) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt="Product"
    />
  );
};
