import React from "react";
import {
  NowPlayingContainer,
  HeaderImageContainer,
  ImageContainer,
} from "./Styles";
import Divider from "../../shared/components/Divider";
import CircleImage from "../../shared/components/CircleImage";

const NowPlaying = () => {
  return (
    <NowPlayingContainer>
      <HeaderImage />
      <div>
        <CircleImage
          url={
            "https://i.scdn.co/image/ab67616100005174214f3cf1cbe7139c1e26ffbb"
          }
        />
        <h3>The Weeknd</h3>
      </div>
      <Divider />
      <div>Popular</div>
      <Divider />
      <div>Discography</div>
    </NowPlayingContainer>
  );
};

const HeaderImage = () => {
  return (
    <HeaderImageContainer>
      <ImageContainer
        src={
          "https://media.gq.com/photos/55d25378606992214f1ecc7d/16:9/w_2560%2Cc_limit/The-Weekend-GQ-2015-01.jpg"
        }
      />
    </HeaderImageContainer>
  );
};

export default NowPlaying;
