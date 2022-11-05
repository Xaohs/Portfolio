import { motion } from "framer-motion";
import Image from "next/image";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { Emoji } from "../Emoji/Emoji";
import { Navbar } from "../Navbar/Navbar";
import { Video } from "../Video/Video";
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
  const scrollRef = useHorizontalScroll();

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
        <div className="h-20"></div>
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
              Hi! I&apos;m Julian, I love building cool stuff and exploring new
              technologies. I am a very creative person and love to experiment
              with new ideas and concepts, I am also a very passionate person
              about my work and I always try to do my best in everything I do.
              <br />
              <br /> I am currently studying Software Development at Bit Academy
              Purmerend, expected to graduate in August 2022. Following that I
              am planning to continue my studies at the University of Applied
              Sciences in Amsterdam to further my knowledge even more.
            </p>
          </div>
        </motion.section>
        <div className="h-20"></div>
        <motion.section
          className="mx-auto w-full p-6 md:p-10"
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="visible" // Animated state to variants.enter
        >
          <div className="m-auto w-3/4">
            <h2 className=" w-full font-futura text-7xl font-extrabold text-white">
              <span className="text-red-1">Background </span>
              <span className="text-yellow-1">Check? </span>
              <Emoji label={"eyes"} symbol={"👀"} />
            </h2>
            <div className="h-6"></div>
            <p className="pr-56 text-2xl">
              I have lived in Spain for seventeen years, where I studied at the
              IES L&apos;Arabi in Albir (Costa Blanca). I have always been
              interested in technology and computers, so when I moved the the
              Netherlands at the age of seventeen I decided to follow that path.
              I did ICT Support for three years and then I started my Software
              Development studies at Bit Academy Purmerend. Check out my
              LinkedIn if you want to know more about my background!
            </p>
          </div>
        </motion.section>
        <div className="h-20"></div>
        <motion.section
          className="sticky top-0 h-[10vh] w-screen bg-black-2"
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="visible" // Animated state to variants.enter
        >
          <div className="m-auto w-1/2">
            <h2 className="w-full font-futura text-7xl font-extrabold text-white">
              <span className="text-green-1">Some </span>
              <span>of my </span>
              <span className="text-blue-1">Work </span>
              <Emoji label={"work"} symbol={"🧑‍💼"} />
            </h2>
            <div className="h-6"></div>
            <p className="pr-56 text-2xl"></p>
          </div>
        </motion.section>
        <Video src={"/sample.mp4"}>
          <span>Test</span>
        </Video>
        <Video src={"/sample2.mp4"}>
          <span>Test 2</span>
        </Video>
        <div className="h-20"></div>
        <div
          className={
            "m-auto flex w-1/2 flex-row items-center justify-center overflow-auto p-28"
          }
          ref={scrollRef}
        >
          {/* <Card /> */}
        </div>
      </motion.section>
    </>
  );
};
