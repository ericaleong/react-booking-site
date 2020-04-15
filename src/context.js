// class based component
// React context is "global" for React components (components folder in this project)
import React, {Component} from 'react';
import Client from './Contentful';


// Creates a Context object
const WorkshopContext = React.createContext();

// will allow access to context all throughout site of our React components
class WorkshopProvider extends Component {
  //all info goes into state which is later called and used in components
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

  // get workshops Data from Contentful
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'bookingSite',
        // put workshops in alphabetical order
        order: "fields.name"
      });
      let workshops = this.formatData(response.items);
      // to show workshops featured on the home page (boolean is set up in contentful as to which one shows)
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

  // loads list of workshops in featured workshops section and workshops page
  formatData(items) {
    let tempItems = items.map(item =>{
  let id = item.sys.id
  // every item is an object in contentful
  let images = item.fields.images.map(image => image.fields.file.url);
  // ...item used to access all properties in item
  let workshop = {...item.fields, images, id}
  return workshop;
    });
  return tempItems
  };

// setting up for a single workshop page
  getWorkshop = slug => {
    // copy and find values from workshop array
    let tempWorkshops = [...this.state.workshops];
    const workshop = tempWorkshops.find(workshop => workshop.slug === slug);
    return workshop;
  };

  handleChange = event => {
    this.setState(
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

// transform value
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

// Provider allows components to use context changes
// Using props to handle all the data
  render() {
    return (
    <WorkshopContext.Provider value={{...this.state, getWorkshop: this.getWorkshop, handleChange: this.handleChange
    }}>
      {/* children used to display what is included between opening and closing tags when invoking component */}
      {this.props.children}
    </WorkshopContext.Provider>
    );
  };
};

// Consumer responsible for accessing information 
// Allows you to use context within a component
const WorkshopConsumer = WorkshopContext.Consumer;

export function withWorkshopConsumer(Component){
  return function ConsumerWrapper(props){
    return <WorkshopConsumer>
      {value => <Component {...props} context={value}/>}
    </WorkshopConsumer>
  };
};

//multiple ways components access the data
export{WorkshopProvider, WorkshopConsumer, WorkshopContext};