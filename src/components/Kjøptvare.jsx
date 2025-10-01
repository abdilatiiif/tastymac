import { Minus, Plus, X } from "lucide-react";

function Kjøptvare({ vare, dispatch }) {
  function leggTil() {
    dispatch({ type: "kjøp", payload: vare.pris });
    dispatch({
      type: "leggtilkurv",
      payload: { ...vare, id: vare.id },
    });
  }

  function fjernBestilling() {
    if (vare.antall > 1) {
      dispatch({ type: "avbestill", payload: vare.pris });
      dispatch({ type: "reduserAntall", payload: vare.id });
    }
  }

  function fjernHeleVaren() {
    dispatch({ type: "fjernFraKurv", payload: vare.id });
    dispatch({ type: "avbestill", payload: vare.pris * vare.antall });
  }

  return (
    <div className="flex gap-4 p-4 bg-gray-100 rounded-lg animate-fade-in">
      <img
        src={vare.image}
        alt={vare.product}
        className="object-cover w-20 h-20 rounded-md"
      />

      <div className="flex-1">
        <h3 className="mb-1 font-semibold text-gray-800">{vare.product}</h3>
        <p className="mb-2 text-gray-600">{vare.pris} kr</p>
        <div className="flex items-center gap-3">
          <button
            onClick={fjernBestilling}
            className="flex items-center justify-center w-8 h-8 text-gray-700 transition-colors bg-gray-200 rounded-full hover:bg-gray-300"
            disabled={vare.antall <= 1}
          >
            <Minus size={16} />
          </button>
          <span className="w-8 font-semibold text-center text-gray-800">
            {vare.antall}
          </span>
          <button
            onClick={leggTil}
            className="flex items-center justify-center w-8 h-8 text-gray-700 transition-colors bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <Plus size={16} />
          </button>
          <button
            onClick={fjernHeleVaren}
            className="text-red-500 transition-colors hover:text-red-700"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Kjøptvare;
