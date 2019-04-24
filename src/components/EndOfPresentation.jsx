import React from "react";
import { Slide, Heading, Image } from "spectacle";

class EndOfPresentation extends React.Component {
  render() {
    // JSX
    return (
      <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Alexa Skill
        </Heading>

        <Image src="https://avatars0.githubusercontent.com/u/16419909?v=4" />

        
      </Slide>
    );
  }
}

export default EndOfPresentation;
