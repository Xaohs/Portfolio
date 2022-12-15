import React, { useRef } from "react";
import type { ColorScores } from "../../Game";

interface IProps {
  handleClickCircle: (ref: React.RefObject<HTMLLIElement>) => void;
  id: ColorScores;
}
export const Circle = (props: IProps) => {
  const { handleClickCircle, id } = props;
  const ref = useRef<HTMLLIElement>(null);

  return <li id={id} onClick={() => handleClickCircle(ref)} ref={ref} />;
};
