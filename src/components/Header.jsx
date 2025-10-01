import { ShoppingCart } from "lucide-react";
import { UtensilsCrossed } from "lucide-react";
import { Redo } from "lucide-react";
import SidebarMenu from "./SidebarMenu";

export default function Header({ kjøpt, dispatch }) {
  return (
    <div className="flex items-center justify-center w-full h-20 transition-all duration-500 shadow-lg p-15">
      <div className="flex flex-col items-center">
        <h1 className="flex items-center text-5xl font-bold animate-pulse">
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
      <button
        onClick={() => dispatch({ type: "åpne", payload: true })}
        className="fixed z-10 p-4 text-white transition-all duration-200 bg-red-600 rounded-full shadow-lg cursor-pointer top-6 right-6 hover:bg-red-700 active:scale-95"
      >
        <ShoppingCart />
        {kjøpt.length >= 1 && (
          <span className="absolute flex items-center justify-center text-sm font-bold text-gray-900 bg-yellow-400 rounded-full -top-2 -right-2 w-7 h-7 animate-bounce">
            {kjøpt.length}
          </span>
        )}
      </button>
      <SidebarMenu kjøpt={kjøpt} />
    </div>
  );
}
