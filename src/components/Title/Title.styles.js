import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${props => props.isHeader ? "1.625rem" : "2.2rem" } ;
  font-family: 'Parisienne', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #2D3047;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
