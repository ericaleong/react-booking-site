// functional based component
// displaying filters and list of workshops below workshop hero
import React from 'react';
import WorkshopFilter from './WorkshopFilter';
import WorkshopList from './WorkshopList';
import {withWorkshopConsumer} from '../context';
import Loading from './Loading';


// access workshops from exported context
function WorkshopContainer({context}){
  const {loading, sortedWorkshops, workshops} = context;
    if(loading) {
      return <Loading/>;
      };
      return (
        <>
          <WorkshopFilter workshops={workshops} />
          <WorkshopList workshops={sortedWorkshops} />
        </> );
}

export default withWorkshopConsumer(WorkshopContainer)