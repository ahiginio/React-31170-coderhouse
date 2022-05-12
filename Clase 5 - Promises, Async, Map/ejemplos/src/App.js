import React from "react"
import Item from "./components/Item/Item";
import {products} from "./data/productos"

function App() {
  
  const task = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000)
    
  })

  task.then((result) => {
    console.log(result)
  }, err => {
    console.log(err)
  }).catch((err) => {
    console.log(err)
  })

  
  return (
    <div className="App">
      {products.map((product, index) => (
          <Item product={product} key={product.id}/>
        )
      )}
    </div>
  );
}

export default App;
