export enum ColorScores {
  blue1 = "blue1",
  red2 = "red2",
  green1 = "green1",
  yellow1 = "yellow1",
  red1 = "red1",
  blue2 = "blue2",
  pink1 = "pink1",
  pink2 = "pink2",
  yellow2 = "yellow2",
  green2 = "green2",
}

export interface Score {
  [ColorScores.blue1]: number;
  [ColorScores.red2]: number;
  [ColorScores.green1]: number;
  [ColorScores.yellow1]: number;
  [ColorScores.red1]: number;
  [ColorScores.blue2]: number;
  [ColorScores.pink1]: number;
  [ColorScores.pink2]: number;
  [ColorScores.yellow2]: number;
  [ColorScores.green2]: number;
}

interface IProps {
  setPlayingGame: (data: boolean) => void;
  playingGame: boolean;
  score: Score;
  setScore: (data: Score) => void;
}
export const Game = (props: IProps) => {
  const { playingGame, setPlayingGame, score, setScore } = props;

  const exitGame = () => {
    setPlayingGame(false);
    reset();
  };

  const reset = () => {
    setScore({
      [ColorScores.blue1]: 0,
      [ColorScores.red2]: 0,
      [ColorScores.green1]: 0,
      [ColorScores.yellow1]: 0,
      [ColorScores.green2]: 0,
      [ColorScores.red1]: 0,
      [ColorScores.blue2]: 0,
      [ColorScores.pink1]: 0,
      [ColorScores.pink2]: 0,
      [ColorScores.yellow2]: 0,
    });
  };
  return (
    <div className="w-full">
      <div
        className="absolute top-5 right-2 z-10 cursor-pointer"
        onClick={() => exitGame()}
      >
        <span>Exit</span>
      </div>
      <div className="pointer-events-none absolute top-0 left-1/2 mx-4 flex  -translate-x-1/2 transform justify-start text-5xl opacity-80 hover:opacity-100 md:flex-col md:justify-center">
        <div className="flex flex-row">
          <div>
            <div className="flex flex-row text-center">
              <div className="h-10 w-10 rounded-full bg-blue-1" />
              <span className="ml-6 ">{score[ColorScores.blue1]}</span>
            </div>
            <div className="flex flex-row text-center">
              <div className="h-10 w-10 rounded-full bg-red-2" />
              <span className="ml-6 ">{score[ColorScores.red2]}</span>
            </div>
            <div className="flex flex-row text-center">
              <div className="h-10 w-10 rounded-full bg-green-1" />
              <span className="ml-6 ">{score[ColorScores.green1]}</span>
            </div>
            <div className="flex flex-row text-center">
              <div className="h-10 w-10 rounded-full bg-yellow-1" />
              <span className="ml-6 ">{score[ColorScores.yellow1]}</span>
            </div>
            <div className="flex flex-row text-center">
              <div className="h-10 w-10 rounded-full bg-pink-2" />
              <span className="ml-6 ">{score[ColorScores.pink1]}</span>
            </div>
          </div>
          <div className="ml-10">
            <div className="flex flex-row text-center">
              <div className="h-10 w-10 rounded-full bg-red-1" />
              <span className="ml-6 ">{score[ColorScores.red1]}</span>
            </div>

            <div className="flex flex-row text-center">
              <div className="h-10 w-10 rounded-full bg-blue-2" />
              <span className="ml-6 ">{score[ColorScores.blue2]}</span>
            </div>
            <div className="flex flex-row text-center">
              <div className="h-10 w-10 rounded-full bg-pink-1" />
              <span className="ml-6 ">{score[ColorScores.pink1]}</span>
            </div>

            <div className="flex flex-row text-center">
              <div className="h-10 w-10 rounded-full bg-yellow-2" />
              <span className="ml-6 ">{score[ColorScores.yellow2]}</span>
            </div>
            <div className="flex flex-row text-center">
              <div className="h-10 w-10 rounded-full bg-green-2" />
              <span className="ml-6 ">{score[ColorScores.green2]}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 mx-4 -translate-x-1/2 -translate-y-1/2  transform text-5xl opacity-80">
        <span>Total: {Object.values(score).reduce((a, b) => a + b, 0)}</span>
      </div>
    </div>
  );
};
