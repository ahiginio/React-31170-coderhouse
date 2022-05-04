import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer title="Nuestros productos" />
      <Footer />
    </div>
  );
}

export default App;
