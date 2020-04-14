// Workshops page
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Workshop({workshop}) {
  const{name,slug,images,price} = workshop;
    return (
      <article className="workshop">
        <div className="img-container">
          <img src={images[0]} alt="single workshop"/>
          <div className="price-top">
            <h6>${price}</h6>
          </div>
          <Link to={`/workshops/${slug}`} className="btn-primary workshop-link">More Info</Link>
        </div>
        <p className="workshop-info">{name}</p>
      </article>
  );
};

Workshop.propTypes = {
  workshop:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired
  })
}
