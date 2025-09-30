import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Items from "./components/Items.jsx";

import Products from "./Products.jsx";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext([]);

function App() {
  const products = Products;

  return (
    <>
      <ProductsContext.Provider value={products}>
        <Header />
        <Menu />
        <Items />
      </ProductsContext.Provider>
    </>
  );
}

export default App;
