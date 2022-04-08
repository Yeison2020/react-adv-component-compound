import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

// Internal Interface
export interface PropsButtons {
  className?: string;
  activeClass?: string;
}
export const ProductButtons = ({ className }: PropsButtons) => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        {" "}
        -{" "}
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};
