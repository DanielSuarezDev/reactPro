import {
  ProductCard,
  ProductImages,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
// import { useShoppingCart } from "../hooks/useShoppingCart";
import { Products } from "../data/products";

const product = Products[0];

export const ShoppingPages = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={product}
        key={product.id}
        initialValue={{
          count: 0,
          maxCount: 10,
        }}
      >
        {() => (
          <>
            <ProductImages />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
