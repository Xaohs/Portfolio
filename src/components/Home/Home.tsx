import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "../../styles/globals.css";
import { Background } from "../Background/Background";
import { Emoji } from "../Emoji/Emoji";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
const variants = {
  offscreen: { opacity: 0.2, x: 0, y: -1000 },
  onscreen: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
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
      delay: 2,
    },
  },
};

export const Home = ({
  setPlayingGame,
}: {
  setPlayingGame: (data: boolean) => void;
}) => {
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const thirdBox = useRef(null);
  const firstBoxView = useInView(firstBox);
  const secondBoxView = useInView(secondBox);
  const thirdBoxView = useInView(thirdBox);

  return (
    <>
      <div className="p-4">
        <motion.section
          className=""
          variants={variants} // Pass the variant object into Framer Motion
          initial="offscreen" // Set the initial state to variants.hidden
          animate="onscreen" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
        >
          <Navbar setPlayingGame={setPlayingGame} />

          <div className="h-max lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-12">
            <div className="lg:mb-10 lg:w-1/2">
              <div className="lg:mx-auto lg:max-w-2xl">
                <h2 className="font-futura text-6xl font-extrabold text-white md:text-7xl">
                  <span className="text-blue-2">Aesthetic </span>
                  <span>Sense of </span>
                  <span className="text-green-1">Creativity </span>
                  <span>and </span>
                  <span className="text-yellow-1">Design</span>
                </h2>
                <div className="h-6"></div>
                <p className=" text-2xl md:pr-56">
                  Aspiring full-stack developer with a passion for creating
                  beautiful and functional websites and applications.
                </p>
              </div>
            </div>
            <div className="relative mt-8 overflow-hidden sm:-mx-8 sm:p-8 md:p-10 lg:mt-0 lg:h-[51rem] lg:w-1/2 lg:rounded-l-2xl lg:p-8">
              <div className="relative flex h-96 min-h-[80vh] w-[94vw] justify-center md:h-full md:w-full">
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
        </motion.section>
        <div className="h-40"></div>
        <div className="relative">
          <section
            ref={firstBox}
            className={`
            
                     flex
            w-full
            justify-center
            transition-all  duration-[1500ms]
            md:p-10
                ${firstBoxView ? "translate-x-0" : "-translate-x-full"}
        `}
          >
            <div className="w-full md:mr-60 md:w-2/4">
              <h2 className="w-full font-futura text-6xl font-extrabold text-white md:text-7xl">
                <span>Some </span>
                <span className="text-pink-1">information </span>
                <span>about </span>
                <span className="text-blue-1">me</span>
              </h2>
              <div className="h-6"></div>
              <p className=" text-2xl md:pr-56">
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
          <div className="h-40"></div>
          <section
            ref={secondBox}
            className={`
                       flex w-full
                       justify-center
                      overflow-hidden transition-all delay-200
                      duration-[1500ms]
                      md:p-10
                      ${secondBoxView ? " translate-x-0" : " translate-x-full"}
            
            `}
          >
            <div className="w-full md:ml-60 md:w-2/4">
              <h2 className=" w-full font-futura text-6xl font-extrabold text-white md:text-7xl">
                <span className="text-red-1">Background </span>
                <span className="text-yellow-1">Check? </span>
                <Emoji label={"eyes"} symbol={"👀"} />
              </h2>
              <div className="h-6"></div>
              <p className="text-2xl md:pr-56 ">
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
      </div>
      <div className="h-40"></div>
      <motion.section
        id="projects"
        className="sticky top-0 z-20 flex w-screen items-center justify-center bg-black-2 p-4"
        w-full
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="visible" // Animated state to variants.enter
      >
        <div className="m-auto w-full text-center md:w-1/2">
          <h2 className="w-full font-futura text-5xl font-extrabold text-white md:text-7xl">
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
      <Background src={"/site2_preview.png"} type="image">
        <div className="text-center">
          <Link href="https://test.speedtimerkollektion.com" passHref>
            <span className="text-blue-1">Ecommerce website (WIP) </span>
          </Link>
          <span>to replace the </span>
          <Link href="https://speedtimerkollektion.com" passHref>
            <span className="text-blue-1">current </span>
          </Link>
          <span>one when finished.</span>
        </div>
      </Background>

      <Footer />
    </>
  );
};
