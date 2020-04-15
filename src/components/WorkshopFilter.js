// class based component
// filtering workshops component through type and price
import React from 'react';
import {useContext} from 'react';
import {WorkshopContext} from '../context';
import Title from '../components/Title';

//get unique values
const getUnique = (items, value) =>{
  return [...new Set(items.map(item => item[value]))]
};

export default function WorkshopFilter({workshops}) {
  const context = useContext(WorkshopContext);
  const  {
    handleChange,
    type,
    price,
    minPrice,
    maxPrice
  } = context;

//get unique types  
let types = getUnique(workshops, 'type');

// add all
types = ['all',...types];

// map to jsx
types = types.map((item, index) => {
  return <option value={item} key={index}>{item}</option>
})
  return (
    <section className="filter-container">
      <Title title="search workshops"/>
      <form className="filter-form">

        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Workshop Type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            {types}
          </select>
        </div>

        {/* price range */}
        <div className="form-group">
          <label htmlFor="price">Workshop Price ${price}</label>
          <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
        </div>

      </form>
    </section>
  );
}