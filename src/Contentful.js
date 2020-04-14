// space and accessToken are in an .env to hide the access
// used to access data from Contentful
import {createClient} from 'contentful';

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});