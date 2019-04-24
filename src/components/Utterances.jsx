
import React from "react";
import {
  Slide,
  Heading,
  Text,
} from "spectacle";

class Models extends React.Component {
  render() {
    // JSX
    return (
      <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Utterances
        </Heading>

        <Text>A set of likely spoken phrases mapped to the intents</Text>
      </Slide>
    );
  }
}

export default Models;
