"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FrontPage } from "../components/FrontPage/FrontPage";
import { Circles } from "../components/Game/Circles/Circles";
import type { Score } from "../components/Game/Game";
import { ColorScores, Game } from "../components/Game/Game";
import { Home } from "../components/Home/Home";
import "../styles/globals.css";

const container = {
  hidden: {
    opacity: 1,
    x: 0,
    y: 0,
    display: "block",
  },
  enter: {
    opacity: 0,
    x: 0,
    y: 1500,
    transition: {
      duration: 2,
    },
    transitionEnd: {
      display: "none",
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -300,
  },
};

export default function Page() {
  const [watchPortfolio, setWatchPortfolio] = useState(false);

  const [playingGame, setPlayingGame] = useState(false);

  const [score, setScore] = useState<Score>({
    [ColorScores.blue1]: 0,
    [ColorScores.red2]: 0,
    [ColorScores.green1]: 0,
    [ColorScores.yellow1]: 0,
    [ColorScores.red1]: 0,
    [ColorScores.blue2]: 0,
    [ColorScores.pink1]: 0,
    [ColorScores.pink2]: 0,
    [ColorScores.yellow2]: 0,
    [ColorScores.green2]: 0,
  });

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <motion.div
        className="absolute top-0 flex min-h-screen w-full bg-black-2"
        initial={false}
        variants={container}
        animate={watchPortfolio || playingGame ? "enter" : "hidden"}
      >
        {!playingGame && !watchPortfolio && (
          <FrontPage
            setWatchPortfolio={setWatchPortfolio}
            setPlayingGame={setPlayingGame}
          />
        )}
      </motion.div>
      {watchPortfolio && !playingGame && (
        <>
          <Home setPlayingGame={setPlayingGame} />
        </>
      )}
      {playingGame && (
        <Game
          playingGame={playingGame}
          setPlayingGame={setPlayingGame}
          score={score}
          setScore={setScore}
        />
      )}

      {playingGame && (
        <Circles setScore={setScore} playingGame={playingGame} score={score} />
      )}
      {!watchPortfolio && !playingGame && (
        <Circles setScore={setScore} playingGame={playingGame} score={score} />
      )}
    </>
  );
}
