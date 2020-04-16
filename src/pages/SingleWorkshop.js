// class based component setup
// setup for each individual workshop page
import React, { Component } from 'react';
// imported default images from data.js incase the image in contentful isn't loading
import defaultBcg from '../images/vipassana1.jpg';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {WorkshopContext} from '../context';
import StyledHero from '../components/StyledHero';
// to adjust dates
import Moment from 'react-moment';
import Footer from '../components/Footer';

export default class SingleWorkshop extends 
Component {
  constructor(props){
    // calling parent (super) constructor before calling this constructor
    super(props);
    this.state={
      //unique for each workshop
      slug:this.props.match.params.slug,
      defaultBcg
    };
  };

  // access context
  static contextType = WorkshopContext;

  // destruct
  render() {
    const {getWorkshop} = this.context;
    const workshop = getWorkshop(this.state.slug);
    // page if no slug exists
    if(!workshop) {
      return (
      <div className="error">
        <h3>No such workshop could be found...</h3>
        <Link to='/workshops' className="btn-primary">
          Back to workshops
        </Link>
      </div>
      );
    };
    // page data if slug exists
    const {
      name,
      description,
      capacity,
      date,
      guide,
      price,
      images
    } = workshop;
    const [mainImg,...defaultImg] = images;


    // putting the data and style on the page from context and components
    return (
      <>
    <StyledHero img={mainImg || this.state.defaultBcg}>
      <Banner title={`${name}`}>
        <Link to='/workshops' className="btn-primary">
          Back to Workshops
        </Link>
      </Banner>
    </StyledHero>
   <section className="single-workshop">
      <div className="single-workshop-images">
        {defaultImg.map((item, index) => {
          return <img key={index} src={item} alt={name} />;
        })}
      </div>
      <div className="single-workshop-info">
        <article className="desc">
        <h3>About</h3>
        <p>{description}</p>
        </article>
        <article className="info">
          <h6>Guide: {guide}</h6>
          <h6>Date: <Moment format="MMM D, YYYY">{date}</Moment></h6>
          <h6>Price: ${price}</h6>
          <h6>Capacity: {" "}
          {/* changing people to person depending on the capacity (1 person or 2+ people) */}
            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
          </h6>
          <h6><a className="btn-primary" href="#">Book Now</a></h6>
        </article>
      </div>
   </section>
   <Footer/>
    </>
    );
  };
}