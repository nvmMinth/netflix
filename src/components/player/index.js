import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Button,
  Overlay,
  Inner,
  Close,
} from "./styles/player.styles";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(isPlaying);
  return (
    <PlayerContext.Provider value={{ isPlaying, setIsPlaying }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { isPlaying, setIsPlaying } = useContext(PlayerContext);
  return isPlaying
    ? ReactDOM.createPortal(
        <Overlay {...restProps}>
          <Inner>
            <video controls autoPlay id="netflix-player" paus>
              <source src={src} type="video/mp4" />
            </video>
            <Close onClick={() => setIsPlaying(false)} />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { isPlaying, setIsPlaying } = useContext(PlayerContext);
  return (
    <Button {...restProps} onClick={() => setIsPlaying(!isPlaying)}>
      Play
    </Button>
  );
};
