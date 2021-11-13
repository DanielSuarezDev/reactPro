import {
  ProductCard,
  ProductImages,
  ProductTitle,
  ProductButtons,
} from "../components";

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
        <ProductCard product={product}>
          <ProductImages />
          <ProductTitle title="ss" />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImages />
          <ProductTitle title="hi" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
