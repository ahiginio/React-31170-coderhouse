import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
export default function Home () {
  return (
    <div className="App">
      <Header />
      <h1>Visita nuestra tienda</h1>
      <p>Disfruta de todas las promociones que tenemos para vos</p>
      <ItemListContainer title="Nuestros productos" />
      <Footer />
    </div>
  );
}