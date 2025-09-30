import { useContext } from "react";
import Item from "./Item.jsx";
import { ProductsContext } from "../App.jsx";

function Items({ setSum }) {
  const products = useContext(ProductsContext);

  console.log(products);
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-10">
      {products.map((p) => (
        <Item
          key={p.id}
          product={p.name}
          price={p.price}
          image={p.image}
          category={p.category}
          products={products}
          setSum={setSum}
        />
      ))}
    </div>
  );
}

export default Items;
