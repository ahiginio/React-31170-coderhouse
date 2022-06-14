import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./views/Home/Home"
import Cart from "./views/Cart/Cart"
import Products from "./views/Products/Products"
import Category from "./views/Category/Category"
import Product from "./views/Product/Product"
import CustomProvider from "./components/CustomProvider/CustomProvider"

function App() {
  return (
    <BrowserRouter>
        <CustomProvider>
          <Routes>
            <Route exact path="*" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/product/:productId" element={<Product />} />
            <Route exact path="/category/:categoryId" element={<Category />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
