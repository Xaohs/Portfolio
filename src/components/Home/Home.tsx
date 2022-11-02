import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "../Navbar/Navbar";

const variants = {
  offscreen: { opacity: 0.2, x: 0, y: -1000 },
  onscreen: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "linear",
      duration: 1.5,
      delay: 0,
    },
  },
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "linear",

      delay: 2,
    },
  },
};

export const Home = () => {
  return (
    <>
      <motion.section
        className=""
        variants={variants} // Pass the variant object into Framer Motion
        initial="offscreen" // Set the initial state to variants.hidden
        animate="onscreen" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
      >
        <Navbar />
        <div className="h-max px-6 sm:px-8 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-12">
          <div className="lg:mb-10 lg:w-1/2">
            <div className="lg:mx-auto lg:max-w-2xl">
              <h2 className=" font-futura text-7xl font-extrabold text-white">
                <span className="text-blue-2">Aesthetic </span>
                <span>Sense of </span>
                <span className="text-green-1">Creativity </span>
                <span>and </span>
                <span className="text-yellow-1">Design</span>
              </h2>
              <div className="h-6"></div>
              <p className="pr-56 text-2xl">
                Aspiring full-stack developer with a passion for creating
                beautiful and functional websites and applications.
              </p>
            </div>
          </div>
          <div className="relative -mx-6 mt-6 overflow-hidden sm:-mx-8 sm:p-8 md:p-10 lg:mt-0 lg:h-[51rem] lg:w-1/2 lg:rounded-l-2xl lg:p-8">
            <div className="relative h-full w-full">
              <Image
                src="/me.jpg"
                alt="Picture of the author"
                quality={100}
                fill={true}
                className={"object-cover"}
              />
            </div>
          </div>
        </div>
        <div className="h-10"></div>
        <motion.section
          className="mx-auto w-full p-6 md:p-10"
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="visible" // Animated state to variants.enter
        >
          <div className="m-auto w-3/4">
            <h2 className=" w-full font-futura text-7xl font-extrabold text-white">
              <span>Some </span>
              <span className="text-pink-1">information </span>
              <span>about </span>
              <span className="text-blue-1">me</span>
            </h2>
            <div className="h-6"></div>
            <p className="pr-56 text-2xl">
              Hi! I&apos;m Julian, I like building cool stuff and exploring new
              technologies and am currently studying Software Developement at
              Bit Academy Purmerend
            </p>
          </div>
        </motion.section>
      </motion.section>
    </>
  );
};
