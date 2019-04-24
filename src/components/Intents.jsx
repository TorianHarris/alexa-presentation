import React from "react";
import { Slide, Heading, Text } from "spectacle";

class Intents extends React.Component {
  render() {
    // JSX
    return (
      <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
         Intents
        </Heading>

        <Text>An intent is what your skill is capable of doing.</Text>
      </Slide>
    );
  }
}

export default Intents;
