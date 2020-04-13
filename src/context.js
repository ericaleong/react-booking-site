import React, {Component} from 'react';
import items from './data';

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

  // getData
  componentDidMount(){
    let workshops = this.formatData(items);
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
      minPrice, 
      maxPrice
    } = this.state

// all the workshops
    let tempWorkshops = [... workshops];

// transofrm value
    price = parseInt(price);

//filter by type
    if(type !== 'all'){
      tempWorkshops = tempWorkshops.filter(workshop => workshop.type === type)
    }
//filter by price
    tempWorkshops = tempWorkshops.filter(workshop => workshop.price <= price);
    this.setState({
      sortedWorkshops: tempWorkshops
    });
  };

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