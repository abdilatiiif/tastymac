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
  kjøpt: {},
  type: Products,
};

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext([]);

function reducerFn(state, action) {
  switch (action.type) {
    case "kjøp":
      return { ...state, sumVarer: state.sumVarer + action.payload };

    case "leggtilkurv": {
      const vare = action.payload;
      const eksisterende = state.kjøpt[vare.id];

      return {
        ...state,
        kjøpt: {
          ...state.kjøpt,
          [vare.id]: eksisterende
            ? { ...eksisterende, antall: eksisterende.antall + 1 }
            : { ...vare, antall: 1 },
        },
      };
    }

    case "reduserAntall": {
      const id = action.payload;
      const eksisterende = state.kjøpt[id];
      if (!eksisterende || eksisterende.antall <= 1) return state;

      return {
        ...state,
        kjøpt: {
          ...state.kjøpt,
          [id]: { ...eksisterende, antall: eksisterende.antall - 1 },
        },
      };
    }

    case "fjernFraKurv": {
      const newKjøpt = { ...state.kjøpt };
      delete newKjøpt[action.payload];
      return { ...state, kjøpt: newKjøpt };
    }

    case "avbestill":
      return { ...state, sumVarer: state.sumVarer - action.payload };

    case "lukk":
      return { ...state, isActive: false };

    case "åpne":
      return { ...state, isActive: true };

    case "type":
      {
        const products = Products;

        const burger = products.filter((b) => b.category === "burger" && b);
        const drikke = products.filter((d) => d.category === "drikke" && d);
        const pølse = products.filter((p) => p.category === "pølse" && p);

        if (action.payload === "burger") {
          return { ...state, type: (state.type = burger) };
        }
        if (action.payload === "all") {
          return { ...state, type: (state.type = products) };
        }
        if (action.payload === "drikke") {
          return { ...state, type: (state.type = drikke) };
        }
        if (action.payload === "pølse") {
          return { ...state, type: (state.type = pølse) };
        }
      }
      break;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const { sumVarer, isActive, pris, kjøpt, type } = state;

  console.log(type);

  /*

  const burger = products.filter((b) => b.category === "burger" && b);
  const drikke = products.filter((d) => d.category === "drikke" && d);
  const pølse = products.filter((p) => p.category === "pølse" && p);

  console.log(burger);
  console.log(drikke);
  console.log(pølse);
*/

  return (
    <>
      <ProductsContext.Provider value={type}>
        <Header kjøpt={kjøpt} dispatch={dispatch} />
        <Menu dispatch={dispatch} />
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
