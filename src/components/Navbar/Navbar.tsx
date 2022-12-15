import Link from "next/link";
import { ImGithub, ImLinkedin, ImMail4 } from "react-icons/im";
import { Navlink } from "./Navlink/Navlink";

export const Navbar = ({
  setPlayingGame,
}: {
  setPlayingGame: (data: boolean) => void;
}) => {
  return (
    <header
      className={
        "flex flex-col items-center justify-between px-6 py-9 text-white  md:flex-row lg:px-12"
      }
    >
      <div className=" mr-4 flex w-full  flex-row md:justify-start">
        <div className="mx-4 flex flex-col text-3xl opacity-80  hover:opacity-100">
          <span className=" last:mr-0   ">Julian</span>
          <span className=" last:mr-0  ">Roeland</span>
        </div>
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
      </div>

      <nav className=" mt-4 mr-4 flex w-full md:mr-4 md:justify-end">
        <Navlink>
          <a
            className="cursor-pointer"
            onClick={() => {
              setPlayingGame(true);
            }}
          >
            <span>Play Game</span>
          </a>
        </Navlink>
        <Navlink>
          <a href="#projects">
            <span>Projects</span>
          </a>
        </Navlink>
        <Navlink>
          <Link href="mailto:julianroeland@gmail.com" target={"_blank"}>
            <span>Contact</span>
          </Link>
        </Navlink>
      </nav>
    </header>
  );
};
