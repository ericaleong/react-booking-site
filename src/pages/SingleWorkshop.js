import React, { Component } from 'react';
// imported default images from data.js incase the image in contentful is a broken image
import defaultBcg from '../images/vipassana1.jpg';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {WorkshopContext} from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleWorkshop extends
Component {
  constructor(props){
    super(props);
    this.state={
      slug:this.props.match.params.slug,
      defaultBcg
    };
  };
  static contextType = WorkshopContext;

  render() {
    const {getWorkshop} = this.context;
    const workshop = getWorkshop(this.state.slug);
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
    const {
      name,
      description,
      capacity,
      price,
      images
    } = workshop;
    const [mainImg,...defaultImg] = images;
    
    return (
      <>
    <StyledHero img={mainImg || this.state.defaultBcg}>
      <Banner title={`${name} Workshop`}>
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
          <h6>Price: ${price}</h6>
          <h6>Capacity: {" "}
            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
          </h6>
        </article>
      </div>
   </section>
    </>
    );
  };
}