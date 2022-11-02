import type { FunctionComponent } from "react";
import { Navlink } from "./Navlink/Navlink";

export const Navbar: FunctionComponent = () => {
  return (
    <header
      className={
        "flex items-center justify-between px-6 py-9 text-white lg:px-12  "
      }
    >
      <Navlink>Julian Roeland</Navlink>
      <nav className=" flex w-full justify-end">
        <Navlink>Projects</Navlink>
        <Navlink>Contact</Navlink>
      </nav>
    </header>
  );
};
