import { X } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Kjøptvare from "./Kjøptvare";

function SidebarMenu({ kjøpt, isActive, dispatch, sumVarer }) {
  console.log(kjøpt);
  return (
    isActive && (
      <div className="fixed top-0 right-0 z-20 w-1/4 h-full overflow-y-auto bg-gray-200 shadow-2xl border-l-1 animate-slide-in">
        <div className="sticky top-0 z-10 p-6 bg-white border-b r-0">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-800">Handlekurv</h2>
            <button
              className="text-gray-500 transition-colors cursor-pointer hover:text-gray-700"
              onClick={() => dispatch({ type: "lukk", payload: false })}
            >
              <X size={28} />
            </button>
          </div>
          <p className="text-gray-600">
            {kjøpt.length} {kjøpt.length === 1 ? "vare" : "varer"}
          </p>
        </div>
        {kjøpt.length === 0 ? (
          <div className="py-12 text-center">
            <ShoppingCart size={64} className="mx-auto mb-4 text-gray-300" />
            <p className="text-lg text-gray-500">Handlekurven er tom</p>
          </div>
        ) : (
          // lopp over varene som kommer inn fra kjøpt array
          kjøpt.map((i) => (
            <Kjøptvare vare={i} dispatch={dispatch} sumVarer={sumVarer} />
          ))
        )}
        {kjøpt.length > 0 && (
          <div className="sticky bottom-0 p-6 bg-white border-t">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-semibold text-gray-800">
                Total:
              </span>
              <span className="text-3xl font-bold text-red-600">
                {sumVarer} kr
              </span>
            </div>
            <button className="w-full py-4 text-lg font-semibold text-white transition-colors duration-200 transform bg-red-600 rounded-lg hover:bg-red-700 active:scale-95">
              Gå til kassen
            </button>
          </div>
        )}
      </div>
    )
  );
}

export default SidebarMenu;
