import React, { useState, useEffect, useRef, useContext } from "react";
import useMouseTracker from "../hooks/useMouseTracker";
import {ThemeContext} from '../App'
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const likeRef = useRef(0);
  const didMountRef = useRef(false);
  const domRef = useRef<HTMLInputElement>(null);
  const position = useMouseTracker();
  const theme = useContext(ThemeContext)
  const style = {
    background: theme.background,
    color: theme.color
  }
  useEffect(() => {
    console.log(theme)
    // console.log("document running");
    document.title = `点击了${like}次`;
    if (didMountRef.current) {
      console.log("this is update");
    } else {
      didMountRef.current = true;
    }
  }, [like]);
  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus();
    }
  });
  function handleAlertClick() {
    setTimeout(() => {
      alert("you clicked on " + likeRef.current + "次");
    }, 3000);
  }
  return (
    <>
      <input type="text" ref={domRef} />
      <h2>
        X: {position.x}, Y : {position.y}
      </h2>
      <button
        style={style}
        onClick={() => {
          setLike((like) => like + 1);
          likeRef.current++;
        }}
      >
        {like} <span role="img">&#128077;</span>
      </button>
      <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
      <button onClick={handleAlertClick}>Alert!</button>
    </>
  );
};
export default LikeButton;
