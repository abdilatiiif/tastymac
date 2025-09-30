import { UtensilsCrossed } from "lucide-react";
import { Redo } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full bg-amber-100 h-20 shadow-lg  flex items-center justify-center p-15">
      <div className="flex flex-col items-center">
        <h1 className=" flex items-center font-bold text-3xl">
          {" "}
          <UtensilsCrossed /> Tastymac
        </h1>
        <p className="flex">
          Grab one the way{" "}
          <span className="flex pl-2">
            <Redo />
            <Redo />
            <Redo />
          </span>
        </p>
      </div>
      <button className="absolute right-5">Cart</button>
    </div>
  );
}
