import styled from 'styled-components';
import { ReactComponent as Image } from '../../assets/icons/manual_icon.svg'

export const MainHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: auto;
  height: 100vh;

  background: linear-gradient(180deg, rgba(163, 193, 219, 0.7) 0%, rgba(167, 185, 195, 0.3) 65.1%);

  @media (min-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;

export const ImageGroomsmen = styled(Image)`
  width: auto;
  height: 43vh;

  margin-top: -6.25rem;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    width: auto;
    height: 70vh;

    margin-bottom: 0;
    
  }
`;

export const Button = styled.button`
  font-family: 'Parisienne';
  font-style: normal;
  font-weight: 400;
  line-height: 1.688rem;
  display: flex;
  justify-content: center;
  align-items: center;

  filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.25));

  background: #2D3047;

  border: none;
  border-radius: 0.75rem;
  
  padding: 5px 20px;

  width: 12.75rem;
  height: 2.25rem;

  cursor: pointer;

  transition: 200ms ease-in-out;

  margin-top: 60px;

  span {
    color: #FFFFFF;
    font-size: 1.25rem;
  }

  &:hover {
    opacity: .9;
  }

  @media (min-width: 768px) {
    width: 20rem;
    height: 3.300rem;
    margin-top: 48px;

    span {
      font-size: 1.875rem;
    }
  }
`;
