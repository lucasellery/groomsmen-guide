import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/icons/icon-small.svg';
import { ReactComponent as ArrowBack } from '../../assets/icons/arrow-back.svg'

export const Container = styled.div`
  padding: 20px;
  background-color: #FFFFFF;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
`;

export const Arrow = styled(ArrowBack)`
  margin-top: 10px;
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
`;