import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${props => props.isHeader ? "1.625rem" : "2.2rem" } ;
  font-family: 'Oleo Script Swash Caps', sans-serif;
  white-space: nowrap;
`;