import { Hamburger } from "lucide-react";
import { Bone } from "lucide-react";
import { CupSoda } from "lucide-react";

function Menu() {
  return (
    <>
      <div className="bg-stone-200 mt-3 flex gap-3 items-center justify-center">
        <button className=" cursor-pointer bg-orange-400 px-6 text-white py-2 rounded-full transition-all duration-200 hover:bg-orange-600 w-60 ">
          Alle Produkter
        </button>
        <button className=" flex flex-col items-center cursor-pointer px-6 text-black py-2 rounded-full transition-all duration-200 hover:bg-green-100 hover:black">
          <Hamburger /> Burger
        </button>
        <button className=" flex flex-col items-center cursor-pointer px-6 text-black py-2 rounded-full transition-all duration-200 hover:bg-green-100 hover:black">
          <Bone /> Pølser
        </button>
        <button className=" flex flex-col items-center cursor-pointer px-6 text-black py-2 rounded-full transition-all duration-200 hover:bg-green-100 hover:black">
          <CupSoda /> Drikke
        </button>
      </div>
    </>
  );
}

export default Menu;
