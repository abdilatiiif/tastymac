import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";

import Products from "./Products.jsx";

function App() {
  console.log(Products);

  return (
    <>
      <Header />
      <Menu></Menu>
    </>
  );
}

export default App;
