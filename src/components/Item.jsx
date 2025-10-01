import { ShoppingCart } from "lucide-react";

function Item({ product, image, price, products, sumVarer, pris, dispatch }) {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md w-75 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={product}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">{product}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{price}＄</span>
          <button
            onClick={() => {
              dispatch({ type: "kjøp", payload: price });
              dispatch({
                type: "leggtilkurv",
                payload: [product, image, price],
              });
            }}
            className="flex items-center gap-2 px-4 py-2 text-white transition-colors duration-200 transform bg-red-600 rounded-lg hover:bg-red-700 active:scale-95"
          >
            <ShoppingCart size={18} />
            Kjøp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
