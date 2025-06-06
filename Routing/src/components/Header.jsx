import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-[65px] p-[10px] mb-3 gap-x-3 text-white  bg-gradient-to-r from-[#672280] to-[#A626D3]">
      <h1 className="font-Inter font-medium text-2xl">React Router</h1>
      <nav>
        <ul className="flex gap-x-3 font-bold text-lg ">
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link" : "")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "nav-link" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
