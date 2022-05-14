import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 120px;

  background: ${props => props.hasTipDarkColor ? "#A9BBC5" : "rgba(169, 187, 197, 0.5)"};
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease-in-out;

  cursor: pointer;

  p {
    font-family: 'Parisienne';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 41px;

    color: #2D3047;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:hover {
    background: ${props => props.hasTipDarkColor ? "rgba(169, 187, 197, 0.9)" : "rgba(169, 187, 197, 0.6)"};
  }

  @media (min-width: 768px) {
    width: 30%;
    height: 66px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
