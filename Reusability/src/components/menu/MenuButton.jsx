import React from "react";
import Button from "../Button";

export default function MenuButton({ children, onClick }) {
  return (
    <Button className="button" onClick={onClick}>
      {children}
    </Button>
  );
}
