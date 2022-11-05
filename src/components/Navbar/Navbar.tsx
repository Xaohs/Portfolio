import Link from "next/link";
import type { FunctionComponent } from "react";
import { ImGithub, ImLinkedin, ImMail4 } from "react-icons/im";
import { Navlink } from "./Navlink/Navlink";

export const Navbar: FunctionComponent = () => {
  return (
    <header
      className={
        "flex items-center justify-between px-6 py-9 text-white lg:px-12  "
      }
    >
      <Navlink>Julian Roeland</Navlink>
      <Navlink>
        <Link
          href="https://www.linkedin.com/in/julian-roeland/"
          target={"_blank"}
        >
          <ImLinkedin size={40} />
        </Link>
      </Navlink>
      <Navlink>
        <Link href="https://github.com/Xaohs" target={"_blank"}>
          <ImGithub size={40} />
        </Link>
      </Navlink>
      <Navlink>
        <Link href="mailto:julianroeland@gmail.com" target={"_blank"}>
          <ImMail4 size={40} />
        </Link>
      </Navlink>
      <nav className=" flex w-full justify-end">
        <Navlink>Projects</Navlink>
        <Navlink>Contact</Navlink>
      </nav>
    </header>
  );
};
