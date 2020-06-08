import React, { useState } from "react";
import LikeButton from "./components/LikeButton";
import "./App.css";
import useMouseTracker from "./hooks/useMouseTracker";
import useURLLoader from "./hooks/useURLLoader";
import Hello from "./components/Hello";

interface IShowResult {
  message: string;
  status: string;
}
interface IThemeProps {
  [key: string]: { color: string; background: string };
}
const theme: IThemeProps = {
  light: {
    color: "#000",
    background: "#eee",
  },
  dark: {
    color: "#fff",
    background: "#222",
  },
};
export const ThemeContext = React.createContext(theme.light);
const App: React.FC = () => {
  const [show, setShow] = useState(true);
  const position = useMouseTracker();
  const [
    data,
    loading,
  ] = useURLLoader("https://dog.ceo/api/breeds/image/random", [show]);
  const dogResult = data as IShowResult;
  return (
    <div className="App">
      <ThemeContext.Provider value={theme.dark}>
        <Hello />
        <header className="App-header">
          {loading ? (
            <p>狗狗读取中</p>
          ) : (
            <img alt="狗狗" src={dogResult && dogResult.message}></img>
          )}
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            showOrHidden
          </button>
          <p>
            X: {position.x}, Y : {position.y}
          </p>
          {show && <LikeButton />}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
