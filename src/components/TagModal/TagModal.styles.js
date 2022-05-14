import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #E7ECEF;
  padding: 10px 20px 20px 20px;
  border-radius: 5px;
  z-index: 11;

  width: 80%;
  min-height: 40vh;
  height: auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Head = styled.div`

`;

export const Close = styled(CloseIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
`;
