//functional based component - Banner inside of hero image
import React from 'react';

// place children in banner to render on the hero page
export default function Banner({children,title,subtitle}) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}