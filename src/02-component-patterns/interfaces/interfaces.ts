import { Props as ProductCardProps } from "../components/ProductCard";
import { PropsTitle } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: PropsTitle) => JSX.Element;
  Image: ({
    img,
    className,
  }: {
    img?: string;
    className?: string;
  }) => JSX.Element;
  Buttons: ({ className }: { className?: string }) => JSX.Element;
}
