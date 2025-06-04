import { useState, createContext } from "react";

import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";

const MenuContext = createContext();

export default function Menu({ children }) {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <MenuContext.Provider value={open}>
      <div className="menu">{children}</div>{" "}
    </MenuContext.Provider>
  );
}

export { MenuContext };
