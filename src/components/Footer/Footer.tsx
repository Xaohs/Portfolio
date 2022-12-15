import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" rounded-lg bg-black-1 p-4 text-gray-200 shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-col text-xl">
          <span className="mx-4  opacity-80 last:mr-0 hover:opacity-100  ">
            Julian
          </span>
          <span className="mx-4  opacity-80 last:mr-0 hover:opacity-100  ">
            Roeland
          </span>
        </div>
        <ul className="mb-6 flex flex-wrap items-center text-xl sm:mb-0">
          <li>
            <Link href="https://www.linkedin.com/in/julian-roeland/">
              <span className="mx-4  opacity-80 last:mr-0 hover:opacity-100  ">
                LinkedIn
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Xaohs">
              <span className="mx-4  opacity-80 last:mr-0 hover:opacity-100  ">
                Github
              </span>
            </Link>
          </li>
          <li>
            <Link href="mailto:julianroeland@gmail.com">
              <span className="mx-4  opacity-80 last:mr-0 hover:opacity-100  ">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
