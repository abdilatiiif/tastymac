import { Hamburger } from "lucide-react";
import { Bone } from "lucide-react";
import { CupSoda } from "lucide-react";

function Menu() {
  function getAll() {
    console.log("all");
  }

  function getBurgers() {
    console.log("get burgers");
  }
  function getPølser() {
    console.log("get pølser");
  }
  function getDrinks() {
    console.log("get drinks");
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
