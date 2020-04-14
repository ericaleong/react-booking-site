// React context is "global" for React components (components folder in this project)

import React, {Component} from 'react';
import Client from './Contentful';


// Creating a Context object
const WorkshopContext = React.createContext();

class WorkshopProvider extends Component {
  state = {
    workshops: [],
    sortedWorkshops: [],
    featuredWorkshops: [],
    loading: true,
    type: 'all',
    price: 0,
    minPrice: 0,
    maxPrice: 0
  };

  // get Data from Contentful
  getData = async () => {
    try {
      let response = await Client.getEntries({
        // bookingSite is from the Contentful API I created
        content_type: 'bookingSite',
        order: "fields.name"
      });
      let workshops = this.formatData(response.items);
      let featuredWorkshops = workshops.filter(workshop => workshop.featured === true);
      let maxPrice = Math.max(...workshops.map(item => item.price));
  
      this.setState({
        workshops,
        featuredWorkshops,
        sortedWorkshops: workshops, 
        loading: false,
        price: maxPrice,
        maxPrice
      });
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount(){
    this.getData()
  };


  formatData(items) {
    let tempItems = items.map(item =>{
  let id = item.sys.id
  let images = item.fields.images.map(image => image.fields.file.url);

  let workshop = {...item.fields, images, id}
  return workshop;
    });
  return tempItems
  };

  getWorkshop = slug => {
    let tempWorkshops = [...this.state.workshops];
    const workshop = tempWorkshops.find(workshop => workshop.slug === slug);
    return workshop;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value 
    const name = event.target.name;
    this.setState(
      {
      [name]:value
    },
    this.filterWorkshops)
  };
  filterWorkshops = ()=>{
    let{
      workshops,
      type,
      price, 
    } = this.state;

// all the workshops
    let tempWorkshops = [...workshops];

// transofrm value
    price = parseInt(price)

//filter by type of workshop
    if(type !== 'all'){
      tempWorkshops = tempWorkshops.filter(workshop => workshop.type === type)
    }
//filter by price of workshop
    tempWorkshops = tempWorkshops.filter(workshop => workshop.price <= price);
    this.setState({
      sortedWorkshops: tempWorkshops
    });
  };

// Provider is used to pass WorkshopContext down the tree, putting the components into the pages
// Using props to handle all the data
  render() {
    return (
    <WorkshopContext.Provider value={{...this.state, getWorkshop: this.getWorkshop, handleChange: this.handleChange
    }}>
      {this.props.children}
    </WorkshopContext.Provider>
    );
  };
};

const WorkshopConsumer = WorkshopContext.Consumer;

export function withWorkshopConsumer(Component){
  return function ConsumerWrapper(props){
    return <WorkshopConsumer>
      {value => <Component {...props} context={value}/>}
    </WorkshopConsumer>
  };
};



export{WorkshopProvider, WorkshopConsumer, WorkshopContext};