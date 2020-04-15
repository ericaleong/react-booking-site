// functional based component setup
import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import WorkshopContainer from '../components/WorkshopContainer';

const Workshops = () => {
  return (
    <>
      <Hero hero="workshopsHero">
      <Banner title="All Our Workshops" subtitle="Guided by world class Gurus"></Banner>
      </Hero>

      <WorkshopContainer/>
  </>
  );
}

export default Workshops