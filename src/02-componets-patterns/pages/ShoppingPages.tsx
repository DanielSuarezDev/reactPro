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
        className="bg-dark text-white"
        key={product.id}
        initialValue={{
          count: 0,
          maxCount: 10,
        }}
      >
        {({ reset, count, maxCount }) => (
          <>
            <ProductImages className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-button" />
            <div>
              {count === maxCount ? <p>Llegaste al limite permitido</p> : <></>}
            </div>
            {count > 0 && <button onClick={reset}>Reset</button>}
          </>
        )}
      </ProductCard>
    </div>
  );
};
