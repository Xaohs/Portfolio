import type { FunctionComponent } from "react";

export const Card: FunctionComponent = () => {
  return (
    //a card where there's a screenshot of my project
    //and a github link to the project
    //and a link to the live site if there is one
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img src="/background.png" alt="" className="h-full w-full" />
    </div>
  );
};
