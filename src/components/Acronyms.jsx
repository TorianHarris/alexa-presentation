import React from 'react';
import {
    Slide,
    Heading,
    List,
    ListItem,
} from 'spectacle';

class Acronyms extends React.Component {


    render() {

        // JSX
        return <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Acronyms
            </Heading>

            <List>
                <ListItem>Intents</ListItem>
                <ListItem>Slots</ListItem>
                <ListItem>Uterrances</ListItem>
                <ListItem>Models</ListItem>
            </List>
        </Slide>;
    }
}

export default Acronyms;