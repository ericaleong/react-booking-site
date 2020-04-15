// class based component
// npm install styled-components
import styled from 'styled-components';
// imported default images from data.js incase the image in contentful isn't loading
import defaultImg from '../images/vipassana1.jpg';

//great to use for using a component throughout website with the same style
const StyledHero = styled.header`
min-height: 60vh;
background: url(${props => props.img? props.img:defaultImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

export default StyledHero;
