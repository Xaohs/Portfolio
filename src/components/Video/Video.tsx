import type { FunctionComponent } from "react";
import React from "react";

interface IProps {
  src: string;
  children: React.ReactNode;
}
export const Video: FunctionComponent<IProps> = (props) => {
  const { src, children } = props;
  return (
    <div className="relative z-[-99] h-[90vh]">
      <video autoPlay muted loop className={"min-w-full opacity-50"}>
        <source src={src} type="video/mp4" />
      </video>
      {/* //make some text in the middle of the video */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-black-1/50 p-10">
        <h1 className="font-futura text-6xl text-white">{children}</h1>
      </div>
    </div>
  );
};
