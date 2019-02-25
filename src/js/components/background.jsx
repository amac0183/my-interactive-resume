import {styled} from 'linaria/react';
import backgroundImg from '../../img/background.jpg';

export const Background = styled.div`
  background-image: url(${backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
  width: 100%;
`;
