import "./style.css";
import BtnCategory from "./BtnCategory";
import { ProductDTO } from "../../models/product";
type Props = {
  product: ProductDTO;
};

export default function ProdutoCard({ product }: Props) {
  return (
    <div className="dsc-card dsc-mb20">
      <div className="dsc-product-details-top dsc-line-bottom">
        <img src={product.imgUrl} alt={product.description} />
      </div>
      <div className="dsc-product-details-bottom">
        <h3>{product.price.toLocaleString("pt-BR")}</h3>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div className="dsc-category-container">
          <BtnCategory nome="Eletrônicos" />
          <BtnCategory nome="Tv Smart" />
          <BtnCategory nome="Full HD" />
        </div>
      </div>
    </div>
  );
}
