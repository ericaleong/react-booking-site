// hero image on all the pages
import React from 'react';

export default function Hero({children, hero}) {
  return  <header className={hero}>{children}</header>
};

Hero.defaultProps ={
  hero:'defaultHero'
}