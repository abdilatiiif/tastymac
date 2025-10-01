import { Hamburger } from "lucide-react";
import { Bone } from "lucide-react";
import { CupSoda } from "lucide-react";
import { useState } from "react";

function Menu({ dispatch }) {
  const [active, setActive] = useState(true);

  function getAll() {
    console.log("all");
    dispatch({ type: "type", payload: "all" });
  }

  function getBurgers() {
    console.log("get burgers");
    dispatch({ type: "type", payload: "burger" });
  }
  function getPølser() {
    console.log("get pølser");
    dispatch({ type: "type", payload: "pølse" });
  }
  function getDrinks() {
    console.log("get drinks");
    dispatch({ type: "type", payload: "drikke" });
  }

  return (
    <>
      <div className="flex items-center justify-center gap-3 mt-3 ">
        <button
          onClick={() => getAll()}
          className="px-6 py-2 text-white transition-all duration-200 bg-orange-400 rounded-full cursor-pointer hover:bg-orange-600 w-60"
        >
          Alle Produkter
        </button>
        <button
          onClick={() => getBurgers()}
          className="flex flex-col items-center px-6 py-2 text-black transition-all duration-200 rounded-full cursor-pointer hover:bg-green-100 hover:black"
        >
          <Hamburger /> Burger
        </button>
        <button
          onClick={() => getPølser()}
          className="flex flex-col items-center px-6 py-2 text-black transition-all duration-200 rounded-full cursor-pointer hover:bg-green-100 hover:black"
        >
          <Bone /> Pølser
        </button>
        <button
          onClick={() => getDrinks()}
          className="flex flex-col items-center px-6 py-2 text-black transition-all duration-200 rounded-full cursor-pointer hover:bg-green-100 hover:black"
        >
          <CupSoda /> Drikke
        </button>
      </div>
    </>
  );
}

export default Menu;
