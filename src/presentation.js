// Import React
import React from 'react';
import {
  Introduction,
  TotalSmartSpeaker,
  EvolutionOfVoice,
  AlexaDevices,
  Perquesites,
  HowToGetStarted,
  AlexaWebsite,
  AWSConsole,
  SupportedLanguageSDK,
  YouTubeChannel,
  AlexaEchoPresentation,
  Acronyms,
  Intents,
  Models,
  Utterances,
  Slots,
  LiveCoding
} from './components';
// Import Spectacle Core tags
import {
  Deck,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <AlexaEchoPresentation />
        <Introduction />
        <AlexaDevices />
        <TotalSmartSpeaker />
        <EvolutionOfVoice />
        <HowToGetStarted />
        <Perquesites />
        <AlexaWebsite />
        <AWSConsole />
        <SupportedLanguageSDK />
        <Acronyms />
        <Intents />
        <Slots />
        <Utterances />
        <Models />
        <LiveCoding />
        <YouTubeChannel />
      </Deck>
    );
  }
}
