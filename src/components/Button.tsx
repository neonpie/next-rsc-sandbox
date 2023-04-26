"use client";

import { useEffect, useState } from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const handleClick = () => console.log("BUTTON PRESS");

  const [bg, setBg] = useState(false);

  useEffect(() => {
    setBg(true);
  }, []);

  return (
    <button
      style={{ backgroundColor: bg ? "red" : "white" }}
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
