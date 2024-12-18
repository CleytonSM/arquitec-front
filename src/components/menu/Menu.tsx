import { LuHouse, LuNotepadText, LuUserRound } from "react-icons/lu";
import { NavLink } from "react-router-dom";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  return (
    <div
      className={`fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button onClick={onClose} className="m-4 text-xl">
        X
      </button>
      <nav className="flex flex-col items-start p-4 space-y-4">
        <NavLink
          to="/"
          onClick={onClose}
          className={({isActive}) => `text-lg flex ${isActive ? "text-slate-500" : ""}`}
        >
          <section className="flex items-center">
            <LuHouse className="text-2xl mr-2" />
            <p>Home</p>
          </section>
        </NavLink>
        <NavLink
          to="/forms"
          onClick={onClose}
          className={({isActive}) => `text-lg flex ${isActive ? "text-slate-500" : ""}`}
        >
          <section className="flex items-center">
            <LuNotepadText className="text-2xl mr-2" />
            <p>Forms</p>
          </section>
        </NavLink>
        <NavLink
          to="/profile"
          onClick={onClose}
          className={({isActive}) => `text-lg flex ${isActive ? "text-slate-500" : ""}`}>
          <section className="flex items-center">
            <LuUserRound className="text-2xl mr-2" />
            <p>Profile</p>
          </section>
        </NavLink>
      </nav>
    </div>
  );
};
