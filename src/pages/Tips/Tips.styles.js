import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/icons/icon-small.svg';
import { ReactComponent as ArrowBack } from '../../assets/icons/arrow-back.svg'

export const Container = styled.div`
  padding: 20px;
  background-color: #FFFFFF;
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 100vw;
    background: linear-gradient(180deg, rgba(163, 193, 219, 0.7) 0%, rgba(167, 185, 195, 0.3) 25.52%);
    background-size: cover;
    padding: 20px 150px;
    flex-grow: 1;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
`;

export const Arrow = styled(ArrowBack)`
  margin-top: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const IconSmall = styled(Icon)`
  width: auto;
`;

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;

  grid-row-gap: 30px;

  margin-top: 30px;

  @media (min-width: 768px) {
    justify-items: start;
  }
`;

export const DesktopContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TitleWithIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  span {
    font-family: 'Parisienne';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #2D3047;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    margin-bottom: 30px;
    border-bottom: 1px solid #2D3047;
    width: calc(100% + 40px);
    padding-bottom: 1rem;
  }
`;
