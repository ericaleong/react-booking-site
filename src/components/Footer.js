// functional based component
import React from 'react';
import Moment from 'react-moment';

export default function Footer({footer}) {
  return (
    <div className="footer">
      <h4>Aura Children &copy;<Moment format="YYYY"></Moment></h4>
    </div>
  );
}