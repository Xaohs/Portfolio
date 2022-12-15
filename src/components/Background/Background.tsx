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
    <div className="relative z-10 h-fit min-h-[80vh]">
      <div className="flex min-h-[80vh] items-center justify-center">
        {type === "image" && (
          <div className="min-w-full opacity-50">
            <Image src={src} alt="preview" fill />
          </div>
        )}
        {type === "video" && (
          <video autoPlay muted loop className={" min-w-full opacity-70"}>
            <source src={src} type="video/mp4" />
          </video>
        )}
      </div>
      {/* //make some text in the middle of the video */}
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform bg-black-1/90 p-2 md:w-auto md:p-10">
        <h1 className="font-futura text-2xl text-white md:text-6xl">
          {children}
        </h1>
      </div>
    </div>
  );
};
