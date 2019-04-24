import React from 'react';
import {
    Slide,
    Heading,
} from 'spectacle';

class HowToGetStarted extends React.Component {


    render() {

        // JSX
        return <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
                How to get started with Alexa Skill?
            </Heading>
        </Slide>;
    }
}

export default HowToGetStarted;