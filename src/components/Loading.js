// Functional based component
// Hidden function, shows spinning gif if loading workshops have a hang time
import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

export default function Loading() {
  return (
    <div className="loading">
      <h4>Loading Workshops...</h4>
      <img src={loadingGif} alt="loading arrow"/>
    </div>
  );
}