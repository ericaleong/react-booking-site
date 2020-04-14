// functional component for hero image on all the pages
import React from 'react';

//children to access everything within the hero banner (see banner.js)
export default function Hero({children, hero}) {
  return  <header className={hero}>{children}</header>
};

// if on a different page, nothing is passed, it will go to the default image which is in App.css
Hero.defaultProps ={
  hero:'defaultHero'
}