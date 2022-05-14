import styled from 'styled-components';

export const Footer = styled.footer`
  font-family: 'Nunito', sans-serif;
  white-space: nowrap;

  width: 100%;

  padding: 0px 0px;
  margin-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  
  div {
    display: flex;
    gap: 5px;
  }

  span {
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.625rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    color: #2D3047;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    width: auto;
    align-self: center;

    position: relative;

    div {
      display: flex;
      gap: 5px;
    }
  }
`;
