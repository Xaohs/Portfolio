import { useRef, useState } from "react";
import type { Score } from "../Game";
import { ColorScores } from "../Game";
import { Circle } from "./Circle/Circle";

interface IProps {
  playingGame: boolean;
  score: Score;
  setScore: (score: Score) => void;
}

export const Circles = (props: IProps) => {
  const { score, setScore, playingGame } = props;
  const clickedRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState({ opacity: "0", color: "" });
  const [animationOfEachCircle, setAnimationOfEachCircle] = useState({
    [ColorScores.blue1]: {
      delay: 1,
      duration: 25,
    },
    [ColorScores.red2]: {
      delay: 2,
      duration: 6,
    },
    [ColorScores.green1]: {
      delay: 4,
      duration: 25,
    },
    [ColorScores.yellow1]: {
      delay: 1,
      duration: 9,
    },

    [ColorScores.green2]: {
      delay: 1,
      duration: 25,
    },
    [ColorScores.red1]: {
      delay: 3,
      duration: 25,
    },
    [ColorScores.blue2]: {
      delay: 7,
      duration: 25,
    },
    [ColorScores.pink1]: {
      delay: 2,
      duration: 9,
    },
    [ColorScores.pink2]: {
      delay: 2,
      duration: 9,
    },
    [ColorScores.yellow2]: {
      delay: 1,
      duration: 7,
    },
  });

  const handleClickCircle = (ref: React.RefObject<HTMLLIElement>) => {
    if (!playingGame) return;
    if (!ref.current) return;
    const color = ref.current.id as ColorScores;
    const animation = animationOfEachCircle[color];
    ref.current.style.animation = "none";
    handleAnimate();
    let newDuration = animation.duration;
    if (animation.duration > 0 && animation.duration < 10) {
      newDuration = animation.duration - 0.35;
    } else if (animation.duration > 10 && animation.duration < 20) {
      newDuration = animation.duration - 0.75;
    } else {
      newDuration = animation.duration - 2;
    }

    setAnimationOfEachCircle({
      ...animationOfEachCircle,
      [color]: {
        ...animationOfEachCircle[color],
        duration: newDuration,
      },
    });

    setTimeout(() => {
      if (!ref.current) return;
      ref.current.style.animation = `animate ${animation.duration}s linear infinite`;
    }, animation.delay * 1000);
    setScore({
      ...score,
      [color]: score[color] + 1,
    });
  };

  const handleAnimate = () => {
    if (animate.opacity === "0") {
      setAnimate({ opacity: "1", color: "#12d382" });

      setTimeout(() => {
        setAnimate({ opacity: "0", color: "" });
      }, 200);
    } else {
      setAnimate({ opacity: "0", color: "" });
    }
  };

  return (
    <>
      <div
        ref={clickedRef}
        style={{
          transition: "all 0.5s linear",
          backgroundClip: "content-box",
          padding: "100px",
          opacity: animate.opacity,
          pointerEvents: "none",
          boxShadow: `inset 0 0 0 100px ${animate.color}`,
        }}
        className="absolute h-full w-full p-40"
      />
      <div
        className={`area ${
          !playingGame ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <ul className="circles">
          <Circle
            handleClickCircle={handleClickCircle}
            id={ColorScores.blue1}
          />
          <Circle handleClickCircle={handleClickCircle} id={ColorScores.red2} />
          <Circle
            handleClickCircle={handleClickCircle}
            id={ColorScores.green1}
          />
          <Circle
            handleClickCircle={handleClickCircle}
            id={ColorScores.yellow1}
          />
          <Circle
            handleClickCircle={handleClickCircle}
            id={ColorScores.green2}
          />
          <Circle handleClickCircle={handleClickCircle} id={ColorScores.red1} />
          <Circle
            handleClickCircle={handleClickCircle}
            id={ColorScores.blue2}
          />
          <Circle
            handleClickCircle={handleClickCircle}
            id={ColorScores.pink1}
          />
          <Circle
            handleClickCircle={handleClickCircle}
            id={ColorScores.pink2}
          />
          <Circle
            handleClickCircle={handleClickCircle}
            id={ColorScores.yellow2}
          />
        </ul>
      </div>
    </>
  );
};
