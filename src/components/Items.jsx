import { useContext } from "react";
import Item from "./Item.jsx";
import { ProductsContext } from "../App.jsx";

function Items() {
  const products = useContext(ProductsContext);

  console.log(products);
  return (
    <div className="border-2 p-10 flex items-center justify-center">
      items container
      {products.map((p) => (
        <Item key={p.id} product={p.name} price={p.price} />
      ))}
    </div>
  );
}

export default Items;
