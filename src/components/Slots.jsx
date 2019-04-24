import React from "react";
import { Slide, Heading, Text } from "spectacle";

class Slots extends React.Component {
  render() {
    // JSX
    return (
      <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Slots
        </Heading>
        <Text>A representative list of possible values for a slot</Text>
      </Slide>
    );
  }
}

export default Slots;
