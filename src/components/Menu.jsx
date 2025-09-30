import { Hamburger } from "lucide-react";
import { Bone } from "lucide-react";
import { CupSoda } from "lucide-react";

function Menu() {
  return (
    <>
      <div className="flex items-center justify-center gap-3 mt-3 ">
        <button className="px-6 py-2 text-white transition-all duration-200 bg-orange-400 rounded-full cursor-pointer  hover:bg-orange-600 w-60">
          Alle Produkter
        </button>
        <button className="flex flex-col items-center px-6 py-2 text-black transition-all duration-200 rounded-full cursor-pointer  hover:bg-green-100 hover:black">
          <Hamburger /> Burger
        </button>
        <button className="flex flex-col items-center px-6 py-2 text-black transition-all duration-200 rounded-full cursor-pointer  hover:bg-green-100 hover:black">
          <Bone /> Pølser
        </button>
        <button className="flex flex-col items-center px-6 py-2 text-black transition-all duration-200 rounded-full cursor-pointer  hover:bg-green-100 hover:black">
          <CupSoda /> Drikke
        </button>
      </div>
    </>
  );
}

export default Menu;
