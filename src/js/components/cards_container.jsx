import {styled} from 'linaria/react';

export const CardsContainer = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-x: scroll;
  white-space: nowrap;

  @media only screen and (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: hidden;
    width: 100%;
  }
`;
