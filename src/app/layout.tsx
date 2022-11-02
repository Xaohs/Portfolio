/* eslint-disable @next/next/no-head-element */
"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import "../styles/globals.css";

const variants = {
  hidden: { opacity: 0, x: -300, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -300 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <title>Home App</title>
        <link rel="preload" href="/fonts/Futura-Bold.ttf" as="font" />
        <link rel="preload" href="/fonts/Souvenir.ttf" as="font" />
      </Head>

      <body className="flex min-h-screen w-full flex-col overflow-x-hidden bg-black-1 font-souvenir text-gray-200 ">
        <div className={"flex h-full w-full flex-1 flex-col text-3xl"}>
          <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: "linear" }} // Set the transition to linear
            className="flex h-full w-full flex-1 flex-col"
          >
            {children}
          </motion.main>
        </div>
      </body>
    </html>
  );
}
