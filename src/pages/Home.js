// functional based component setup
import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import FeaturedWorkshops from '../components/FeaturedWorkshops';
import Footer from '../components/Footer';

export default function Home() {
  return (
  <>
    <Hero>
      <Banner title="Discover Workshops" subtitle="Find one that suits your spiritual needs">
      <Link to ='/workshops' className="btn-primary">Explore All Workshops</Link>
      </Banner>
    </Hero>
    <FeaturedWorkshops />
    <Footer/>
  </>
  );
}