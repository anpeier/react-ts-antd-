import React, { useContext } from "react";
import { ThemeContext } from "../App";

interface IHelloProp {
  message?: string;
}
const Hello: React.FC<IHelloProp> = (props) => {
  const theme = useContext(ThemeContext)
  const style = {
    background: theme.background,
    color: theme.color
  }
  return <h2 style={style}>{props.message}</h2>;
};
Hello.defaultProps = {
  message: "hello world",
};
export default Hello;
