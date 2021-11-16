import {
  ProductCard,
  ProductImages,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";

export const ShoppingPages = () => {
  const product = {
    id: 1,
    title: "Coffe Card",
    img: "./coffee-mug.png",
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImages className="custom-image" />
          <ProductTitle title="ss" />
          <ProductButtons className="custom-button" />
        </ProductCard>

        <ProductCard product={product} style={{ color: "red" }}>
          <ProductImages
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle style={{ fontWeight: "bold" }} title="hi" />
          <ProductButtons
            style={{ display: "flex", justifyContent: "center" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
