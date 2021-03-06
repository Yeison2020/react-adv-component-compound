import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-img" />
          <ProductCard.Title
            title={"Hola Mundo"}
            className="text-white"
            activeClass="active"
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-img" />
          <ProductTitle
            className="text-white"
            title="Caffe Con leche Normal"
            activeClass="active"
          />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        {/* Applying CSS Properties */}
        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage />
          <ProductTitle title="Caffe Con leche CSS" />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
