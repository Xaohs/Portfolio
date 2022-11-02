import type { FunctionComponent } from "react";
import React from "react";

interface IProps {
  children: React.ReactNode;
}
export const Navlink: FunctionComponent<IProps> = (props) => {
  const { children } = props;
  return (
    <a className="mx-4  opacity-80 last:mr-0 hover:opacity-100  ">{children}</a>
  );
};
