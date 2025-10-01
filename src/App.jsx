import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Items from "./components/Items.jsx";

import Products from "./Products.jsx";
import { createContext } from "react";
import { useReducer } from "react";
import SidebarMenu from "./components/SidebarMenu.jsx";

const initialState = {
  sumVarer: 0,
  isActive: true,
  pris: 0,
  kjøpt: [],
};

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext([]);

function reducerFn(state, action) {
  switch (action.type) {
    case "kjøp":
      console.log("summer varer");
      return { ...state, sumVarer: state.sumVarer + action.payload };
    case "leggtilkurv":
      console.log("legg til handlekurv");
      return { ...state, kjøpt: [...state.kjøpt, action.payload] };
    case "lukk":
      console.log("lukk handlekurv");
      return { ...state, isActive: (state.isActive = false) };
    case "åpne":
      console.log("åpne handlekurv");
      return { ...state, isActive: (state.isActive = true) };
    case "avbestill":
      console.log("avbestill varer");
      return { ...state, sumVarer: state.sumVarer - action.payload };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const { sumVarer, isActive, pris, kjøpt } = state;

  console.log(kjøpt.length);

  const products = Products;

  return (
    <>
      <ProductsContext.Provider value={products}>
        <Header kjøpt={kjøpt} dispatch={dispatch} />
        <Menu />
        <Items
          sumVarer={sumVarer}
          pris={pris}
          kjøpt={kjøpt}
          dispatch={dispatch}
        />
        <SidebarMenu
          dispatch={dispatch}
          isActive={isActive}
          kjøpt={kjøpt}
          sumVarer={sumVarer}
        />
      </ProductsContext.Provider>
    </>
  );
}

export default App;
