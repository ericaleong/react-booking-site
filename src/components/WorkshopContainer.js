import React from 'react';
import WorkshopFilter from './WorkshopFilter';
import WorkshopList from './WorkshopList';
import {withWorkshopConsumer} from '../context';
import Loading from './Loading';

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