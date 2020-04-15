// functional based component
// Workshop card on workshop page
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// to adjust dates
import Moment from 'react-moment';

// destructing workshop to grab each object
export default function Workshop({workshop}) {
  const{name,slug,images,price,date} = workshop;
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
        <h6 className="workshop-date"><Moment format="MMM D, YYYY">{date}</Moment></h6>
      </article>
  );
};

// making sure data received is valid with propTypes
Workshop.propTypes = {
  workshop:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired
  })
}
