// functional base component setup
import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import FeaturedWorkshops from '../components/FeaturedWorkshops';

export default function Home() {
  return (
  <>
    <Hero>
      <Banner title="Workshops" subtitle="Find one that suits your spiritual needs">
      <Link to ='/workshops' className="btn-primary">Explore All Workshops</Link>
      </Banner>
    </Hero>
    
    <FeaturedWorkshops />
  </>
  );
}