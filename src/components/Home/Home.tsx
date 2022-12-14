import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Background } from "../Background/Background";
import { Emoji } from "../Emoji/Emoji";
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
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const thirdBox = useRef(null);
  const firstBoxView = useInView(firstBox);
  const secondBoxView = useInView(secondBox);
  const thirdBoxView = useInView(thirdBox);

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
        <div className=" h-max px-6 sm:px-8 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-12">
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
        <div className="relative">
          <section
            ref={firstBox}
            className={`
            
                     flex
            w-full
            justify-center
            p-6
            transition-all duration-1000
            md:p-10
                ${firstBoxView ? "translate-x-0" : "-translate-x-full"}
        `}
          >
            <div className=" mr-60 w-2/4">
              <h2 className=" w-full font-futura text-7xl font-extrabold text-white">
                <span>Some </span>
                <span className="text-pink-1">information </span>
                <span>about </span>
                <span className="text-blue-1">me</span>
              </h2>
              <div className="h-6"></div>
              <p className="pr-56 text-2xl">
                Hi! I&apos;m Julian, I love building cool stuff and exploring
                new technologies. I am a very creative person and love to
                experiment with new ideas and concepts, I am also a very
                passionate person about my work and I always try to do my best
                in everything I do.
                <br />
                <br /> I am currently studying Software Development at Bit
                Academy Purmerend, expected to graduate in August 2022.
                Following that I am planning to continue my studies at the
                University of Applied Sciences in Amsterdam to further my
                knowledge even more.
              </p>
            </div>
          </section>
          <div className="h-20"></div>
          <section
            ref={secondBox}
            className={`
                       flex w-full
                       justify-center
                      p-6
                      transition-all duration-1000
                      md:p-10
                      ${secondBoxView ? "translate-x-0" : "translate-x-full"}
            
            `}
          >
            <div className="ml-60 w-2/4">
              <h2 className=" w-full font-futura text-7xl font-extrabold text-white">
                <span className="text-red-1">Background </span>
                <span className="text-yellow-1">Check? </span>
                <Emoji label={"eyes"} symbol={"👀"} />
              </h2>
              <div className="h-6"></div>
              <p className="pr-56 text-2xl">
                I have lived in Spain for seventeen years, where I studied at
                the IES L&apos;Arabi in Albir (Costa Blanca). I have always been
                interested in technology and computers, so when I moved the the
                Netherlands at the age of seventeen I decided to follow that
                path. I did ICT Support for three years and then I started my
                Software Development studies at Bit Academy Purmerend. Check out
                my LinkedIn if you want to know more about my background!
              </p>
            </div>
          </section>
        </div>
        <div className="h-20"></div>
        <motion.section
          id="projects"
          className="sticky top-0 z-20 flex w-screen items-center justify-center bg-black-2 p-4"
          w-full
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
        <Background src={"/site_preview.mp4"} type="video">
          <div className="flex flex-col items-center justify-center">
            <span>Admin Panel for</span>
            <Link href="https://test.speedtimerkollektion.com" passHref>
              <span className="text-blue-1">Ecommerce website (WIP)</span>
            </Link>
          </div>
        </Background>
        <div className="mt-[8rem]" />
        <Background src={"/site2_preview.png"} type="image">
          <div className="text-center">
            <Link href="https://test.speedtimerkollektion.com" passHref>
              <span className="text-blue-1">Ecommerce website (WIP) </span>
            </Link>
            <span>to replace the </span>
            <Link href="https://test.speedtimerkollektion.com" passHref>
              <span className="text-blue-1">current </span>
            </Link>
            <span>one when finished.</span>
          </div>
        </Background>
      </motion.section>
    </>
  );
};
