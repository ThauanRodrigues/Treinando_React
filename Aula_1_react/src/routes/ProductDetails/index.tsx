import "./styles.css";
import BtnAzul from "../../Components/BtnAzul";
import BtnBranco from "../../Components/BtnBranco";
import Header from "../../Components/Header";
import ProdutoCard from "../../Components/ProdutoCard";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description:
    "HQ Smart TV LED 50 HQSTV50NY Ultra HD 4K Netflix Youtube 3 HDMI 2 USB Wi-Fi",
  imgUrl:
    "https://m.media-amazon.com/images/I/51AH9Lr5xTL._AC_UF1000,1000_QL80_.jpg",
  price: 2000.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos",
    },
    {
      id: 3,
      name: "Eletrônicos",
    },
  ],
};

export default function ProductDetails() {
  return (
    <>
      <Header />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProdutoCard product={product} />
          <div className="dsc-btn-page-container">
            <BtnAzul />
            <BtnBranco />
          </div>
        </section>
      </main>
    </>
  );
}
