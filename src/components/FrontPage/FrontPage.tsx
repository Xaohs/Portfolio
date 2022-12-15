export const FrontPage = ({
  setWatchPortfolio,
  setPlayingGame,
}: {
  setWatchPortfolio: (data: boolean) => void;
  setPlayingGame: (data: boolean) => void;
}) => {
  return (
    <div className="z-20 flex h-full w-full flex-col items-center justify-center">
      <>
        <h2
          className=" absolute top-1/3 left-1/2 z-20 mx-4 -translate-x-1/2 -translate-y-1/3 transform cursor-pointer rounded-full bg-neutral-300 p-4 text-center text-3xl text-black-1 opacity-80 "
          onClick={() => setPlayingGame(true)}
        >
          Play game
        </h2>
        <h1 className="absolute top-1/2 left-1/2 z-20 mx-4 -translate-x-1/2 -translate-y-1/2 transform  text-5xl opacity-80 hover:opacity-100 ">
          Julian Roeland
        </h1>
        <h2
          className=" absolute bottom-[25%] left-1/2 z-20 mx-4 -translate-x-1/2 -translate-y-1/3 transform cursor-pointer rounded-full bg-neutral-300 p-4 text-center text-3xl text-black-1 opacity-80"
          onClick={() => setWatchPortfolio(true)}
        >
          Explore Portfolio
        </h2>
      </>
    </div>
  );
};
