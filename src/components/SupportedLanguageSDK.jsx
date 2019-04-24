import React from 'react';
import {
    Slide,
    Heading,
    Image
} from 'spectacle';

class SupportedLanguageSDK extends React.Component {


    render() {

        // JSX
        return <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
                Alexa SDK
            </Heading>
            <Image height="150px" src="/images/nodejs.png"/>
            <Image height="150px" src="/images/python.png"/>
            <Image height="150px" src="/images/java.png"/>
        </Slide>;
    }
}

export default SupportedLanguageSDK;