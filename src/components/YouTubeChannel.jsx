import React from "react";
import { Slide, Heading, Image } from "spectacle";

class YouTubeChannel extends React.Component {
  render() {
    // JSX
    return (
      <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          YouTube Channel
        </Heading>

        <Image height="440px" src="/images/youtube.png"/>

        <Heading size={4}>EsterlingAccime</Heading>
      </Slide>
    );
  }
}

export default YouTubeChannel;
