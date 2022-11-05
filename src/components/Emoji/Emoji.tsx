import type { FunctionComponent } from "react";

interface IProps {
  label: string;
  symbol: string;
}
export const Emoji: FunctionComponent<IProps> = (props) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
};
