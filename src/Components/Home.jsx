import React from 'react';

import Header from './Header';
import Slider from './Slider';
import BrandLogo from './BrandLogo';
import Footer from './Footer';
import Build from './Build';
import Chat from './Chat';
import Features from './Features';
import Instantly from './Instantly';
import Creations from './Creations';

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <BrandLogo />
      <Build />
      <Chat />
      <Instantly />
      <Creations />
      <Features />
      <Footer />

    </React.Fragment>
  )
}
export default Home;