import {
  ProductCard,
  ProductImages,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { Products } from "../data/products";
export const ShoppingPages = () => {
  const { handleProductChange, shopingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {Products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            value={shopingCart[product.id]?.count ?? 0}
            onChange={handleProductChange}
          >
            <ProductImages className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-button" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shopingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            value={product.count}
            onChange={handleProductChange}
          >
            <ProductImages className="custom-image" />
            <ProductButtons className="custom-button" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
