// full list of workshops below the filters
import React from 'react';
import Workshop from './Workshop';

export default function WorkshopList({workshops}) {
if(workshops.length === 0){
  return(
    <div className="empty-search">
      <h3>Bummer! No workshops matched your criteria.</h3>
    </div>
  );
};
  return (
    <section className="workshopsList">
      <div className="workshopslist-center">
        {
          workshops.map(item =>{
            return <Workshop key={item.id} workshop={item} />
          })
        }
      </div>
    </section>
    );
}