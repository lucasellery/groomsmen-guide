import styled from 'styled-components';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

export const Container = styled.div`
  width: 40%;
  height: 90%;
  max-height: 95%;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 16px 16px 20px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  padding: 25px 40px;

  position: relative;
`;

export const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled(Close)`
  position: absolute;
  right: 20px;

  cursor: pointer;
`;