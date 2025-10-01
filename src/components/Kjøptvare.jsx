import { Minus, Plus } from "lucide-react";
import { useState } from "react";

function Kjøptvare({ vare, dispatch, sumVarer }) {
  const [antall, setAntall] = useState(1);

  function leggTil() {
    setAntall((prev) => prev + 1);
    dispatch({ type: "kjøp", payload: vare[2] });
  }

  function fjernBestilling() {
    setAntall((prev) => prev - 1);
    dispatch({ type: "avbestill", payload: vare[2] });
  }

  return (
    <div
      key={vare[0]}
      className="flex gap-4 p-4 rounded-lg bg-gray-50 animate-fade-in"
    >
      <img
        src={vare[1]}
        alt={vare[0]}
        className="object-cover w-20 h-20 rounded-md"
      />

      <div className="flex-1">
        <h3 className="mb-1 font-semibold text-gray-800">{vare[0]}</h3>
        <p className="mb-2 text-gray-600">{vare[2]} kr</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => fjernBestilling()}
            className="flex items-center justify-center w-8 h-8 text-gray-700 transition-colors bg-gray-200 rounded-full hover:bg-gray-300"
            disabled={antall <= 1}
          >
            <Minus size={16} />
          </button>
          <span className="w-8 font-semibold text-center text-gray-800">
            {antall}
          </span>
          <button
            onClick={() => leggTil()}
            className="flex items-center justify-center w-8 h-8 text-gray-700 transition-colors bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Kjøptvare;
