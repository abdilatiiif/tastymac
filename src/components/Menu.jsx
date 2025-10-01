import { Hamburger } from "lucide-react";
import { Bone } from "lucide-react";
import { CupSoda } from "lucide-react";
import { useState } from "react";

function Menu({ dispatch }) {
  const [active, setActive] = useState(false);

  function handleClick(type) {
    dispatch({ type: "type", payload: type });
    setActive(type);
  }

  const ikkeAktiv = `flex flex-col items-center px-6 py-2 text-black transition-all duration-200 rounded-full cursor-pointer hover:bg-green-100 hover:black`;
  const aktivType = `flex flex-col items-center px-6 py-2 text-black bg-orange-300 transition-all duration-200 rounded-full cursor-pointer hover:bg-green-100 hover:black`;

  return (
    <>
      <div className="flex items-center justify-center gap-3 mt-3 ">
        <button
          onClick={() => handleClick("all")}
          className={`${ikkeAktiv} ${active === "all" && aktivType}`}
        >
          Alle Produkter
        </button>
        <button
          onClick={() => handleClick("burger")}
          className={`${ikkeAktiv} ${active === "burger" && aktivType}`}
        >
          <Hamburger /> Burger
        </button>
        <button
          onClick={() => handleClick("pølse")}
          className={`${ikkeAktiv} ${active === "pølse" && aktivType}`}
        >
          <Bone /> Pølser
        </button>
        <button
          onClick={() => handleClick("drikke")}
          className={`${ikkeAktiv} ${active === "drikke" && aktivType}`}
        >
          <CupSoda /> Drikke
        </button>
      </div>
    </>
  );
}

export default Menu;
