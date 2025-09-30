import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Items from "./components/Items.jsx";

import Products from "./Products.jsx";
import { createContext } from "react";
import { useReducer } from "react";

const initialState = {
  sumVarer: 0,
  isActive: false,
  pris: 0,
};

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext([]);

function reducerFn(state, action) {
  switch (action.type) {
    case "kjøp":
      console.log("legg til denne varen i handlekurven");
      return { ...state, sumVarer: state.sumVarer + action.payload };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const { sumVarer, isActive, pris } = state;

  console.log(sumVarer, isActive, pris);

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
