import * as React from 'react';
import Headshot from './Headshot';
import LandingPageText from './LandingPageText';
import LandingPageHeading from './LandingPageHeading';

export default function Home() {
  return (
    <main>
      <Headshot />
      <LandingPageHeading/>
      <LandingPageText />
    </main>
  );
}
