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
`;

export const ImageGroomsmen = styled(Image)`
  width: auto;
  height: 65vh;

  margin-top: -6.25rem;
  margin-bottom: 1.25rem;
`;

export const Button = styled.button`
  font-family: 'Parisienne';
  font-style: normal;
  font-weight: 400;
  line-height: 1.688rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #2D3047;

  border: none;
  border-radius: 0.75rem;
  
  padding: 5px 20px;

  width: 12.75rem;
  height: 2.25rem;

  span {
    color: #FFFFFF;
    font-size: 1.25rem;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0px;

  span {
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.625rem;
    text-align: center;
  }
`;