import React from "react"
import axios from "axios"
import './App.css';

function App() {
  const [bulldog, setBulldog] = React.useState([])
  const [teclados, setTeclados] = React.useState([])
  const [mouses, setMouses] = React.useState([])
  React.useEffect(() => {

    fetch("https://api.mercadolibre.com/sites/MLA/search?q=teclados")
      .then((response) => response.json())
      .then((json) => setTeclados(json.results))
      .catch((err) => console.error(err))
    
    axios
      .get("https://api.mercadolibre.com/sites/MLA/search?q=mouse")
      .then((response) => setMouses(response.data.results))
      .catch((err) => console.error(err));
      
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => setBulldog(res.data.message.bulldog))
      .catch((err) => console.error(err));

  },[])
  console.log(teclados)
  console.log(mouses)
  return (
    <div className="App">
      {bulldog.map((b) => (<h1>{b}</h1>))}
    </div>
  );
}

export default App;
