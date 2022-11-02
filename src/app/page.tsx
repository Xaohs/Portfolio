"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Home } from "../components/Home/Home";

const container = {
  hidden: { opacity: 1, x: 0, y: 0 },
  enter: {
    opacity: 0,
    x: 0,
    y: 1500,
    transition: {
      type: "linear",
      duration: 2,
      delay: 0,
    },
    transitionEnd: {
      display: "none",
    },
  },
  exit: { opacity: 0, x: 0, y: -300 },
};
export default function Page() {
  const [onHover, setOnHover] = useState(false);

  return (
    <>
      <motion.div
        className="absolute top-0 flex min-h-screen w-full bg-black-2"
        initial={false}
        variants={container}
        animate={onHover ? "enter" : "hidden"}
      >
        <div
          className="flex h-full w-full flex-col items-center justify-center"
          onMouseEnter={() => setOnHover(true)}
        >
          <h1 className=" absolute top-1/2 left-1/2 mx-4 -translate-x-1/2 -translate-y-1/2 transform  text-5xl opacity-80 last:mr-0 hover:opacity-100 ">
            Julian Roeland
          </h1>
        </div>
      </motion.div>
      {onHover && (
        <>
          <Home />
        </>
      )}
    </>
  );
}
