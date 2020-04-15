// funcitonal based component setup
import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import ConnectForm from '../components/ConnectForm';

export default function Connect() {
  return (
  <>
  <Hero hero="contactHero">
    <Banner title='Connect' subtitle='See The Light. Become An Aura Child.'>
      <Link to ='/' className='btn-primary'>
        return home
      </Link>
    </Banner>
  </Hero>

  <ConnectForm/>

  </>
  )
}

