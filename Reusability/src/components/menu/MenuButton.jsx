import React from "react";
import Button from "../Button";

import { MenuContext } from "./Menu";

export default function MenuButton({ children }) {
  // const toggle = React.useContext(MenuContext).toggle;
  return <Button className="button">{children}</Button>;
}
