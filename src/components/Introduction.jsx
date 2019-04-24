import React from "react";
import { Slide, Heading, List, ListItem, Image } from "spectacle";

class Introduction extends React.Component {
  render() {
    // JSX
    return (
      <Slide>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Esterling Accime
        </Heading>

        <Image src="https://avatars0.githubusercontent.com/u/16419909?v=4" />

        <List>
          <ListItem>YouTuber</ListItem>
          <ListItem>Software Engineer At Cox Automotive</ListItem>
          <ListItem>Instructor at Georgia Tech</ListItem>
        </List>
      </Slide>
    );
  }
}

export default Introduction;
