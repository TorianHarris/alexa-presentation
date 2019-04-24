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
          Models
        </Heading>

        <Text>A structure that identifies the steps for a multi-turn conversation between your skill and the user to collect all the information needed to fulfill each intent</Text>
      </Slide>
    );
  }
}

export default Models;
