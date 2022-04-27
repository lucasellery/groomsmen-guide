import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/icons/icon-small.svg';
import { ReactComponent as ArrowBack } from '../../assets/icons/arrow-back.svg'

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  margin-top: -10px;
`;

export const Arrow = styled(ArrowBack)`
  margin-right: 15px;
`;

export const IconSmall = styled(Icon)`
  width: auto;
`;

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  grid-row-gap: 30px;

  margin-top: 30px;
`;
