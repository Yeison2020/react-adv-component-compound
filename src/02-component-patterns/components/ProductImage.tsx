import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface PropsImage {
  img?: string;
  className?: string;
  activeClass?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img = "", className, style }: PropsImage) => {
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
      src={imgToShow}
      alt="Product description"
      style={style}
    />
  );
};
