import "./styles.css";
import SearchBar from "../../Components/SearchBar";
import Header from "../../Components/Header";
import CatalogCard from "../../Components/CatalogCard";
import BtnCarregarMais from "../../Components/BtnCarregarMais";
export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
          </div>
          <BtnCarregarMais />
        </section>
      </main>
    </>
  );
}
