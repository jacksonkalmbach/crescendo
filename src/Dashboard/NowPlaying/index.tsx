import React from "react";
import { NowPlayingContainer } from "./Styles";
import Divider from "../../shared/components/Divider";

const NowPlaying = () => {
  return (
    <NowPlayingContainer>
      <div>Artist</div>
      <Divider />
      <div>Popular</div>
      <Divider />
      <div>Discography</div>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
