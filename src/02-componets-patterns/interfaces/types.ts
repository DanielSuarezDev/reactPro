import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (arg: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValue?: InitialValues;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
  value?: number;
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
  maxCount?: number;
  initialValue?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increasBy: (value: number) => void;
  reset: () => void;
}
