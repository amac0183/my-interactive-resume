import {styled} from 'linaria/react';

export const Card = styled.div`
  background-color: white;
  margin: 0px;
  margin-top: 2rem;
  min-width: 600px;
  min-height: 200px;
  padding-bottom: 3.75rem;

  @media (max-width: 500px) {
    margin-top: 0.752rem;
    padding-bottom: 1.409rem;
  }
`;
