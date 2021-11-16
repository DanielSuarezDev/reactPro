import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export interface Product {
  id: number;
  title: string;
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface PropsImages {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}
export interface PropsButton {
  className?: string;
  style?: React.CSSProperties;
}
export interface ProductContextProps {
  counter: number;
  increasBy: (value: number) => void;
  product: Product;
}
