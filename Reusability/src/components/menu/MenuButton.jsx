import React from "react";
import Button from "../Button";

export default function MenuButton({ children, toggle }) {
  return (
    <Button className="button" onClick={toggle}>
      {children}
    </Button>
  );
}
