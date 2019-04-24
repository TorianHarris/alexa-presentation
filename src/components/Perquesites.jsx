import React from "react";
import {
  Slide,
  Heading,
  List,
  ListItem,
} from "spectacle";

class Intents extends React.Component {
  render() {
    // JSX
    return (
      <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Prerequisites
        </Heading>

        <List>
          <ListItem>Alexa Developer Account</ListItem>
          <ListItem>AWS Account</ListItem>
        </List>
      </Slide>
    );
  }
}

export default Intents;
