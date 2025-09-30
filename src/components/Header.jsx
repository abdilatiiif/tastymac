import { ShoppingCart } from "lucide-react";
import { UtensilsCrossed } from "lucide-react";
import { Redo } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full bg-amber-100 h-20 shadow-lg  flex items-center justify-center p-15">
      <div className="flex flex-col items-center">
        <h1 className="  animate-pulse flex items-center font-bold text-3xl">
          {" "}
          <UtensilsCrossed /> Tastymac
        </h1>
        <p className="flex animate-pulse">
          Grab one the way{" "}
          <span className="flex pl-2">
            <Redo />
            <Redo />
            <Redo />
          </span>
        </p>
      </div>
      <button className=" cursor-pointer fixed top-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-200 active:scale-95">
        <ShoppingCart />
      </button>
    </div>
  );
}
