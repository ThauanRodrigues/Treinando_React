import "./App.css";
import "./Components/Header";
import Header from "./Components/Header";
import BtnAzul from "./Components/BtnAzul";
import BtnBranco from "./Components/BtnBranco";
import ProdutoCard from "./Components/ProdutoCard";

function App() {
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

export default App;
