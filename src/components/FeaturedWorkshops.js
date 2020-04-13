import React, {Component} from 'react';
import {WorkshopContext} from '../context';
import Loading from './Loading';
import Workshop from './Workshop';
import Title from './Title';

export default class FeaturedWorkshops extends Component {
  static contextType = WorkshopContext
  render() {
    let {loading, featuredWorkshops : workshops} = this.context;
    workshops = workshops.map(workshop => {
      return <Workshop key={workshop.id} workshop={workshop}/>
    });
    return (
      <section className='featured-workshops'>
        <Title title='featured workshops'/>
        <div className="featured-workshops-center">
        {loading?<Loading/>:workshops}  
        </div>
      </section>
    );
  };
}