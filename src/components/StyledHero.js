// class based component
import styled from 'styled-components';
// imported default images from data.js incase the image in contentful is a broken image
import defaultImg from '../images/vipassana1.jpg';

const StyledHero = styled.header`
min-height: 60vh;
background: url(${props => props.img? props.img:defaultImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

export default StyledHero;
