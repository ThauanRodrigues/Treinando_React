import "./styles.css";
import BtnAzul from "../../Components/BtnAzul";
import BtnBranco from "../../Components/BtnBranco";
import Header from "../../Components/Header";
import ProdutoCard from "../../Components/ProdutoCard";

export default function ProductDetails() {
  return (
    <>
      <Header />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProdutoCard />
          <div className="dsc-btn-page-container">
            <BtnAzul />
            <BtnBranco />
          </div>
        </section>
      </main>
    </>
  );
}
