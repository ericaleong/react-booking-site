//Banner inside of hero image

import React from 'react';

export default function Banner({children,title,subtitle}) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}