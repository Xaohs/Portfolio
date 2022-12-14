import Image from "next/image";
import type { FunctionComponent } from "react";
import React from "react";

interface IProps {
  src: string;
  children: React.ReactNode;
  type: "video" | "image";
}
export const Background: FunctionComponent<IProps> = (props) => {
  const { src, children, type } = props;
  return (
    <div className="relative z-10 h-[90vh]">
      {type === "image" && (
        <div className="min-w-full opacity-50">
          <Image src={src} alt="preview" fill />
        </div>
      )}
      {type === "video" && (
        <video autoPlay muted loop className={"min-w-full opacity-50"}>
          <source src={src} type="video/mp4" />
        </video>
      )}
      {/* //make some text in the middle of the video */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-black-1/80 p-10">
        <h1 className="font-futura text-6xl text-white">{children}</h1>
      </div>
    </div>
  );
};
