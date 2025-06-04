import { useContext } from "react";

import MenuContext from "./Menu";

export default function MenuDropdown({ children }) {
  const toggle = useContext(MenuContext);

  return toggle && <div className="menu-dropdown">{children}</div>;
}
