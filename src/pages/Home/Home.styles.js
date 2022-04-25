import styled from 'styled-components';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { ReactComponent as Image } from '../../assets/images/main-page.svg'

export const MainHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.75rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-family: 'Oleo Script Swash Caps', sans-serif;
  white-space: nowrap;
`;

export const ImageGroomsmen = styled(Image)`
  width: 100%;
  height: 400px;
`;

export const Button = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  background: #2D3047;

  border: none;
  border-radius: 8px;
  
  padding: 5px 20px;
  margin-top: 2.375rem;

  span {
    color: #FFFFFF;
    font-size: 14px;
  }
`;

export const Arrow = styled(ArrowRight)`
  margin-left: 16px;
  width: 15px;
`;

export const Footer = styled.footer`
  font-size: 0.875rem;
  font-family: 'Inter', sans-serif;
  white-space: nowrap;

  position: absolute;
  bottom: 0rem;
`;