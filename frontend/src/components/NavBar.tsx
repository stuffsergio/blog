import { Home, Search, Menu, X } from "../assets/svg/Icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-10 text-(--shade-800)">
      {/* Menú de opciones flotante por encima del navbar */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 1 }}
            className="absolute bottom-18 right-0"
          >
            <ul>
              <button className="flex flex-row justify-center items-center gap-2 px-2 py-1 rounded-full bg-green-200">
                <p className="text-sm">Live</p>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              </button>
              <button></button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex flex-row justify-center items-center gap-3 px-4 py-2 rounded-full border border-gray-200 shadow-sm shadow-white bg-white backdrop-blur-xl">
        <ul>
          <Link to={"/"}>
            <Home size={18} />
          </Link>
        </ul>
        <ul>
          <div className="flex flex-row justify-between items-center gap-2 px-2 py-2 bg-(--gray-300) rounded-full">
            <label htmlFor="search">
              <Search size={18} />
            </label>
            <input
              type="search"
              name="search"
              id="search"
              autoComplete="off"
              onFocus={() => setInputActive(true)}
              onBlur={() => setInputActive(false)}
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="px-0 text-sm focus:outline-none"
            />
            {/* onFocus: evento que se dispara si el usuario hace click dentro del input / llega a él mediante tabs */}
            {/* onBlur: evento que se dispara si el usuario hace click fuera el input / sale de él */}
            <div className="flex justify-end text-xs w-8 mr-2">
              {inputActive ? (
                <AnimatePresence>
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    onClick={() => setBusqueda("")}
                  >
                    <X size={14} />
                  </motion.button>
                </AnimatePresence>
              ) : (
                <AnimatePresence>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  >
                    <p className="opacity-60">Ctrl K</p>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </ul>
        <ul className="flex flex-row">
          <button onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </ul>
      </nav>
    </div>
  );
}
